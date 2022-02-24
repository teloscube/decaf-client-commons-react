import { buildDecafClient, DecafClient } from '@decafhub/decaf-client';
import React, { useContext } from 'react';

// cookie getter
export function getCookie(name: string) {
  return document.cookie
    .split(';')
    .map((c) => c.trim().split('='))
    .filter((c) => c[0] === name)[0]?.[1];
}

export interface DecafContextType {
  client: DecafClient;
}

export const DecafContext = React.createContext<DecafContextType>({
  client: undefined as unknown as DecafClient,
});

export function DecafProvider({ children, value }: { children: JSX.Element; value: DecafContextType }) {
  return <DecafContext.Provider value={value}>{children}</DecafContext.Provider>;
}

export const useDecaf = () => useContext(DecafContext);

/// ///////////////////////
// INTERNAL DEFINITIONS //
/// ///////////////////////

export function getAuthenticationToken(): string | undefined {
  // Attempt to get the cookie value:
  const cookie = getCookie('ember_simple_auth-session');

  // If no cookie, return nothing:
  if (!cookie) {
    return undefined;
  }

  try {
    // Attempt to parse the cookie value:
    const authinfo = JSON.parse(cookie);

    // Get the token, if any:
    const token: string | undefined = authinfo?.authenticated?.token;

    // Done, return the token:
    return token;
  } catch {
    console.error('Can not parse authentication information!');
    return undefined;
  }
}

export function getAuthenticatedDecafClient(): DecafClient | undefined {
  // Attempt to get the authentication token:
  const token = getAuthenticationToken();

  // Check token, build client and return:
  return token ? buildDecafClient('', { token }) : undefined;
}

export function getAuthenticatedDecafClientOrRedirect(): DecafClient {
  const client = getAuthenticatedDecafClient();

  if (client === undefined) {
    window.location.href = `/webapps/waitress/production?next=${window.location.href}`;
    return undefined as unknown as DecafClient;
  }

  return client;
}
