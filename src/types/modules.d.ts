declare module '@/../server/protocol' {
  export const REQ_REGISTER_ID: string
  export const REQ_ROOM_LIST: string
  export const REQ_ROOM_INFO: string
  export const REQ_PEOPLE_IN_ROOM: string
  export const REQ_MESSAGE: string
  export const RES_NEW_MESSAGE: string
  export const REQ_INVITE: string
  export const REQ_JOIN: string
  export const REQ_LEAVE: string
  export const REQ_PEOPLE_OTHER_ROOMS: string
  export const RES_JOINED: string
  export const RES_LEFT: string
  export const RES_INVITED: string
  export const RES_IMAGE_UPLOADED: string
  export const BUILTIN_DISCONNECT: string
}

declare module '*.png' {
  const content: string
  export default content
}

declare module 'socket.io-file-client' {
  export type UploadIds = string[]

  export type FileInfo = {
    uploadId: string
    name: string
  }

  export default class SocketIOFileClient {
    constructor (socket: SocketIOClient.Socket)
    upload: (files: File[], data?: { [key: string]: any }) => UploadIds
  }
}
