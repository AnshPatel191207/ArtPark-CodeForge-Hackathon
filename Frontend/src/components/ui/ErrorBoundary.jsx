import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05070F] flex items-center justify-center p-8 text-center">
          <div className="glass-card p-12 max-w-lg border-accent-error/30">
            <h2 className="text-3xl font-black text-white mb-4">Neural <span className="text-accent-error">Collapse</span></h2>
            <p className="text-slate-400 mb-8 font-inter">A critical runtime anomaly has been detected in the cognitive engine.</p>
            <div className="bg-black/50 p-4 rounded-xl mb-8 font-mono text-xs text-accent-error text-left overflow-auto max-h-40">
              {this.state.error && this.state.error.toString()}
            </div>
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-neon-primary px-8 py-3"
            >
              Reboot Matrix
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
