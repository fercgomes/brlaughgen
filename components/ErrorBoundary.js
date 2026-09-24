import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (typeof window !== 'undefined' && projectToken && host) {
      const posthog = require('posthog-js').default
      posthog.captureException(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
