import {
  generateTokens as voidGenerateTokens,
  renewTokens as voidRenewTokens,
} from "../functions/tokener.function";
import User from "./user.class";

export class Token {
  public accessToken: string;
  public refreshToken: string;
  public renewTokens: () => Promise<void>;

  static async generateTokens(user: User) {
    const tokens = await voidGenerateTokens(user);
    return new Token(tokens.accessToken, tokens.refreshToken);
  }

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.renewTokens = this.tokenRenewFlow;
  }

  private async tokenRenewFlow() {
    const tokens = await voidRenewTokens(this.refreshToken);
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
  }
}
