import { CognitoUser } from '@aws-amplify/auth';

export interface Usuario {
  user: CognitoUser;
  username: string;
  tokens: any;
  pool?: any;
}
