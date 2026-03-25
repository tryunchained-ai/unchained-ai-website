'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = "6db97269-ff8e-479c-823e-b250ff596468";

interface Agent {
  id: string;
  name: string;
  avatar: string;
  subtitle: string;
}

const AGENTS: Record<string, Agent> = {
  tiki: {
    id: "d9b0818f-4dc6-4ef0-a1d1-50338a046920",
    name: "Connor — Freaky Tiki AI",
    avatar: "🌺",
    subtitle: "Party Boat Charter Agent",
  },
  vetro: {
    id: "eb617f6d-2b48-406d-aab9-1496226cd184",
    name: "Sofia — Vetro AI Host",
    avatar: "🍷",
    subtitle: "Restaurant Reservation Agent",
  },
};

interface VapiCallModalProps {
  agentKey: string | null;
  onClose: () => void;
}

export default function VapiCallModal({ agentKey, onClose }: VapiCallModalProps) {
  const [callActive, setCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [statusTitle, setStatusTitle] = useState('Ready to Connect');
  const [statusSub, setStatusSub] = useState('Click start to speak with the AI agent live');
  const [buttonText, setButtonText] = useState('Start Call');

  const vapiRef = useRef<Vapi | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const agent = agentKey ? AGENTS[agentKey] : null;

  const resetCallUI = useCallback(() => {
    setCallActive(false);
    setCallStatus('idle');
    setSecondsElapsed(0);
    setStatusTitle('Ready to Connect');
    setStatusSub('Click start to speak with the AI agent live');
    setButtonText('Start Call');
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleClose = useCallback(() => {
    if (vapiRef.current && callActive) {
      vapiRef.current.stop();
    }
    resetCallUI();
    onClose();
  }, [callActive, resetCallUI, onClose]);

  const startCall = useCallback(async () => {
    if (!agent) return;

    try {
      setStatusTitle('Connecting...');
      setStatusSub('Allow microphone access if prompted');
      setCallStatus('connecting');

      const vapi = new Vapi(VAPI_PUBLIC_KEY);
      vapiRef.current = vapi;

      vapi.on('call-start', () => {
        setCallActive(true);
        setCallStatus('connected');
        setStatusTitle('Connected');
        setStatusSub("You're live — speak naturally");

        // Start timer
        timerRef.current = setInterval(() => {
          setSecondsElapsed(prev => prev + 1);
        }, 1000);
      });

      vapi.on('call-end', () => {
        setCallActive(false);
        setCallStatus('ended');
        setStatusTitle('Call Ended');
        setStatusSub('Thanks for trying the demo!');
        setButtonText('Call Again');

        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        vapiRef.current = null;
      });

      vapi.on('error', (error) => {
        console.error('Vapi error:', error);
        setStatusTitle('Connection Error');
        setStatusSub('Check microphone permissions and try again');
        resetCallUI();
      });

      await vapi.start(agent.id);

    } catch (err) {
      console.error('Failed to start call:', err);
      setStatusTitle('Could Not Connect');
      setStatusSub('Check microphone permissions and try again');
      setCallStatus('idle');
    }
  }, [agent, resetCallUI]);

  const endCall = useCallback(() => {
    if (vapiRef.current && callActive) {
      vapiRef.current.stop();
    }
  }, [callActive]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  // Reset when agent changes
  useEffect(() => {
    if (agentKey) {
      resetCallUI();
    }
  }, [agentKey, resetCallUI]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  if (!agent) return null;

  return (
    <div
      className={`call-overlay ${agentKey ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="call-widget">
        <div className="call-widget-header">
          <div className="call-widget-avatar">{agent.avatar}</div>
          <div className="call-widget-info">
            <h3>{agent.name}</h3>
            <p>{agent.subtitle} · Unchained AI</p>
          </div>
          <button className="call-widget-close" onClick={handleClose}>✕</button>
        </div>
        <div className="call-widget-body">
          <div className="call-status">
            <div className={`call-status-icon ${callStatus === 'connected' ? 'calling' : ''}`}>
              {callStatus === 'ended' ? '✓' : agent.avatar}
            </div>
            <h4>{statusTitle}</h4>
            <p>{statusSub}</p>
          </div>

          <div className={`call-timer ${callStatus === 'connected' ? 'visible' : ''}`}>
            {formatTime(secondsElapsed)}
          </div>

          <div className={`call-wave ${callStatus === 'connected' ? 'active' : ''}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className="call-controls">
            {callStatus !== 'connected' ? (
              <button
                className="btn-call-start"
                onClick={startCall}
                disabled={callStatus === 'connecting'}
              >
                {callStatus === 'ended' ? '🔄' : '🎙️'} &nbsp; {buttonText}
              </button>
            ) : (
              <button className="btn-call-end visible" onClick={endCall}>
                📵 &nbsp; End Call
              </button>
            )}
          </div>

          <p className="call-note">
            Microphone access required · No account needed<br />
            This is a real AI agent — say anything
          </p>
        </div>
      </div>
    </div>
  );
}
