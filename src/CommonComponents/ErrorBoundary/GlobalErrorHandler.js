import React, { Component } from 'react';
import ErrorText from './ErrorText';

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <ErrorText />
                </div>
            );
        }

        return this.props.children;
    }
}

export default GlobalErrorBoundary;