import { useCallback } from 'react';

let audioInstance: HTMLAudioElement | null = null;

export function usePlayAudio(audioUrl: string | undefined) {
  if (!audioUrl) return;

  return useCallback(
    function () {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
      }

      audioInstance = new Audio(audioUrl);
      audioInstance.play();
    },
    [audioUrl]
  );
}
