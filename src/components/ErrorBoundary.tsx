import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-black px-6 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Algo salió mal
          </p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-black dark:text-white uppercase leading-[0.9]">
            Error inesperado
          </h1>
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl border-2 border-black text-black dark:border-white dark:text-white text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Volver al inicio
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
