import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class PlayerService {
  public state$: ReplaySubject<YT.PlayerState> = new ReplaySubject(1);
  public ready$: ReplaySubject<boolean> = new ReplaySubject(1);
  public minimized$: ReplaySubject<boolean> = new ReplaySubject(1);
  private player: YT.Player;
  private state: YT.PlayerState;
  private ready = false;
  private minimized = false;

  /**
   * Constructor of the class
   */
  public constructor() { }

  /**
   * Setter for YouTube player, this will also set ready bit to true.
   *
   * @param {YT.Player} player
   */
  public setPlayer(player: YT.Player) {
    this.player = player;

    this.ready = true;
    this.ready$.next(this.ready);
  }

  /**
   * Getter for YouTube player
   *
   * @returns {YT.Player}
   */
  public getPlayer(): YT.Player {
    return this.player;
  }

  /**
   * Method to chang
   *
   * @param {YT.PlayerState}  state
   * @returns {ReplaySubject<YT.PlayerState>}
   */
  public changeState(state: YT.PlayerState): ReplaySubject<YT.PlayerState> {
    this.state = state;
    this.state$.next(this.state);

    return this.state$;
  }

  public changeMinimizeState(state: boolean): ReplaySubject<boolean> {
    this.minimized = state;
    this.minimized$.next(this.minimized);

    return this.minimized$;
  }

  /**
   * Method to start playing video
   */
  public playVideo() {
    this.ready ? this.player.playVideo() : (() => { })();
  }

  /**
   * Method to pause current video
   */
  public pauseVideo() {
    this.ready ? this.player.pauseVideo() : (() => { })();
  }
}
