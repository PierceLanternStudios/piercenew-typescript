// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Piercenew } from '../client';

export abstract class APIResource {
  protected _client: Piercenew;

  constructor(client: Piercenew) {
    this._client = client;
  }
}
