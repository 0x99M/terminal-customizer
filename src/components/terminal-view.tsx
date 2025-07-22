'use client';

import { useTerminal } from '@/contexts/terminal-context';
import { useEffect } from 'react';

export default function TerminalView() {
  const { state } = useTerminal();

  // Load Google Font dynamically
  useEffect(() => {
    const loadGoogleFont = (fontFamily: string) => {
      // Check if font is already loaded
      const existingLink = document.querySelector(`link[href*="${fontFamily.replace(' ', '+')}"]`);
      if (existingLink) return;

      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(' ', '+')}:wght@100;200;300;400;500;600;700;800;900&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    loadGoogleFont(state.selectedFont);
  }, [state.selectedFont]);

  // Convert hex color to rgba with opacity
  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  const terminalStyle = {
    backgroundColor: hexToRgba(state.backgroundColor, state.backgroundOpacity),
    color: state.textColor,
    fontFamily: state.selectedFont,
    fontSize: `${state.fontSize}px`,
    fontWeight: state.fontWeight,
    lineHeight: state.lineSpacing,
  };

  const cursorStyle = {
    color: state.cursorColor,
    backgroundColor: state.cursorStyle === 'block' ? state.cursorColor : 'transparent',
    borderBottom: state.cursorStyle === 'underline' ? `2px solid ${state.cursorColor}` : 'none',
    borderLeft: state.cursorStyle === 'bar' ? `2px solid ${state.cursorColor}` : 'none',
    display: 'inline-block',
    width: state.cursorStyle === 'block' ? '0.6em' : state.cursorStyle === 'bar' ? '2px' : '0.6em',
    height: '1em',
    animation: 'blink 1s infinite',
  };

  const promptStyle = {
    color: state.promptColor,
  };

  const selectionStyle = {
    backgroundColor: state.selectionBackgroundColor,
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto">
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>

      <div
        className="overflow-scroll p-4 rounded-lg border border-gray-300 font-mono"
        style={{
          ...terminalStyle,
          width: '100%',
          height: '100%',
        }}
      >
        {/* Terminal Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm opacity-70">Terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="space-y-2">
          {/* Welcome message */}
          <div>
            <span style={promptStyle}>user@terminal</span>
            <span className="opacity-70">:</span>
            <span style={promptStyle}>~</span>
            <span style={promptStyle}>{state.promptSymbol}</span>
            <span className="ml-2">welcome to terminal customizer</span>
          </div>

          {/* Sample commands */}
          <div>
            <span style={promptStyle}>user@terminal</span>
            <span className="opacity-70">:</span>
            <span style={promptStyle}>~</span>
            <span style={promptStyle}>{state.promptSymbol}</span>
            <span className="ml-2">ls -la</span>
          </div>

          <div className="ml-0 opacity-80">
            <div>drwxr-xr-x  5 user user  4096 Jan 15 10:30 .</div>
            <div>drwxr-xr-x  3 user user  4096 Jan 15 10:25 ..</div>
            <div>-rw-r--r--  1 user user   220 Jan 15 10:25 .bashrc</div>
            <div>-rw-r--r--  1 user user   807 Jan 15 10:25 .profile</div>
            <div>drwxr-xr-x  2 user user  4096 Jan 15 10:30 Documents</div>
            <div>drwxr-xr-x  2 user user  4096 Jan 15 10:30 Downloads</div>
          </div>

          {/* Command with selection */}
          <div>
            <span style={promptStyle}>user@terminal</span>
            <span className="opacity-70">:</span>
            <span style={promptStyle}>~</span>
            <span style={promptStyle}>{state.promptSymbol}</span>
            <span className="ml-2">cat </span>
            <span style={selectionStyle} className="px-1">example.txt</span>
          </div>

          <div className="ml-0 opacity-80">
            <div>This is a sample file content.</div>
            <div>Font: {state.selectedFont}</div>
            <div>Size: {state.fontSize}px</div>
            <div>Weight: {state.fontWeight}</div>
            <div>Line Spacing: {state.lineSpacing}</div>
          </div>

          {/* Current command line with cursor */}
          <div>
            <span style={promptStyle}>user@terminal</span>
            <span className="opacity-70">:</span>
            <span style={promptStyle}>~</span>
            <span style={promptStyle}>{state.promptSymbol}</span>
            <span className="ml-2">npm run dev</span>
            <span style={cursorStyle}></span>
          </div>
        </div>
      </div>
    </div>
  );
}