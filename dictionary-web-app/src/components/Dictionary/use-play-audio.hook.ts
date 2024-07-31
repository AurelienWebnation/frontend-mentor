import { useCallback } from 'react';

let audioInstance: HTMLAudioElement | null = null;

/*
 * This hook take an audio url and return a function that plays the audio.
 * @param audioUrl - The audio url to play.
 */
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
