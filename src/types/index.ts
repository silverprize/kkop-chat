enum MessageType {
  User,
  System,
}

enum MessageContentType {
  Text,
  Image,
}

enum KeyCode {
  Enter = 13,
}

enum Dialog {
  INVITATION,
  CONFIRM_INVITATION,
  MESSAGE,
}

interface Message {
  id: string;
  type: MessageType;
  content: string;
  contentType: MessageContentType;
  senderId: string;
  sentAt: string;
  uploadId?: string;
  timestamp: number;
}

interface MessageParams {
  content: string | FileList;
  contentType: MessageContentType;
  senderId: string;
}

interface Room {
  name: string;
  countPeople: number;
}

type RouteEnterNext<T> = (next: (vm: T) => any) => void

type RouteNext = (next?: boolean) => void

export {
  MessageType,
  MessageContentType,
  KeyCode,
  Dialog,
  Message,
  MessageParams,
  Room,
  RouteEnterNext,
  RouteNext,
}
