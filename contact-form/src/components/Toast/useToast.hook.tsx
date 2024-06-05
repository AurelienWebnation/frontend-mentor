import { ReactNode, useEffect, useState } from 'react';
import { Toast } from './Toast';
import { createPortal } from 'react-dom';

interface Props {
  timeout?: number;
  title: string;
  description: string;
}

export function useToast({
  timeout = 2000,
  title,
  description,
}: Props): [(isShowing: boolean) => void, ReactNode | null] {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    function hideToast() {
      setShowToast(false);
    }

    const timeoutId = window.setTimeout(hideToast, timeout);

    return () => window.clearTimeout(timeoutId);
  }, [showToast]);

  const ToastPortal = createPortal(
    <Toast title={title}>{description}</Toast>,
    document.body
  );

  const ToastOrNull = showToast ? ToastPortal : null;

  return [setShowToast, ToastOrNull];
}
