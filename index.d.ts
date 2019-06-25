declare interface Loudness {
  getMuted(): Promise<boolean>
  getVolume(): Promise<number>
  setMuted(muted: boolean): Promise<void>
  setVolume(volume: number): Promise<void>
  setDefaultDevice(name: string): boolean
  setCard (index: number): boolean
}

declare const loudness: Loudness

export = loudness
