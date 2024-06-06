import {
  generateTokens as voidGenerateTokens,
  renewTokens as voidRenewTokens,
} from "../function/tokener.function";
import { IAccessToken, IRefreshToken } from "../interface/token.interface";
import User from "./user.class";

interface TokenParams {
  accessToken: IAccessToken;
  refreshToken: IRefreshToken;
}

export default class Token {
  public accessToken: IAccessToken;
  public refreshToken: IRefreshToken;
  public renewTokens: () => Promise<void>;

  static async generateTokens(user: User) {
    const tokens = await voidGenerateTokens(user);
    return new Token({
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    });
  }

  constructor({ accessToken, refreshToken }: TokenParams) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.renewTokens = this.tokenRenewFlow;
  }

  private async tokenRenewFlow(): Promise<void> {
    const tokens = await voidRenewTokens(this.refreshToken);
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
  }
}
