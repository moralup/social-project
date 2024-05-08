<<<<<<< HEAD
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode;
=======
import { Component, ErrorInfo, ReactNode, Suspense } from 'react';

import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    readonly children: ReactNode;
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
}

interface ErrorBoundaryState {
    hasError: boolean;
}

<<<<<<< HEAD
class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
=======
export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
<<<<<<< HEAD
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
=======
            return (
                <Suspense fallback="">
                    <PageError />
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
                </Suspense>
            );
        }

        return children;
    }
}
<<<<<<< HEAD

export default ErrorBoundary;
=======
>>>>>>> 055736284f79264b7d7c2bb32b6b62b5d11ed118
