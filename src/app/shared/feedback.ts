export class Feedback {
  firstname: string;
  lasname: string;
  telnumb: number;
  email: string;
  agree: boolean;
  contacttype: string;
  message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];