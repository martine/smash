// package: proto
// file: smash.proto

import * as jspb from 'google-protobuf';

export class ClientMessage extends jspb.Message {
  hasComplete(): boolean;
  clearComplete(): void;
  getComplete(): CompleteRequest | undefined;
  setComplete(value?: CompleteRequest): void;

  hasRun(): boolean;
  clearRun(): void;
  getRun(): RunRequest | undefined;
  setRun(value?: RunRequest): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): KeyEvent | undefined;
  setKey(value?: KeyEvent): void;

  getMsgCase(): ClientMessage.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ClientMessage
  ): ClientMessage.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ClientMessage,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessage;
  static deserializeBinaryFromReader(
    message: ClientMessage,
    reader: jspb.BinaryReader
  ): ClientMessage;
}

export namespace ClientMessage {
  export type AsObject = {
    complete?: CompleteRequest.AsObject;
    run?: RunRequest.AsObject;
    key?: KeyEvent.AsObject;
  };

  export enum MsgCase {
    MSG_NOT_SET = 0,
    COMPLETE = 1,
    RUN = 2,
    KEY = 3
  }
}

export class CompleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getCwd(): string;
  setCwd(value: string): void;

  getInput(): string;
  setInput(value: string): void;

  getPos(): number;
  setPos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CompleteRequest
  ): CompleteRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CompleteRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CompleteRequest;
  static deserializeBinaryFromReader(
    message: CompleteRequest,
    reader: jspb.BinaryReader
  ): CompleteRequest;
}

export namespace CompleteRequest {
  export type AsObject = {
    id: number;
    cwd: string;
    input: string;
    pos: number;
  };
}

export class CompleteResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getError(): string;
  setError(value: string): void;

  getPos(): number;
  setPos(value: number): void;

  clearCompletionsList(): void;
  getCompletionsList(): Array<string>;
  setCompletionsList(value: Array<string>): void;
  addCompletions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CompleteResponse
  ): CompleteResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CompleteResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponse;
  static deserializeBinaryFromReader(
    message: CompleteResponse,
    reader: jspb.BinaryReader
  ): CompleteResponse;
}

export namespace CompleteResponse {
  export type AsObject = {
    id: number;
    error: string;
    pos: number;
    completionsList: Array<string>;
  };
}

export class RunRequest extends jspb.Message {
  getCell(): number;
  setCell(value: number): void;

  getCwd(): string;
  setCwd(value: string): void;

  clearArgvList(): void;
  getArgvList(): Array<string>;
  setArgvList(value: Array<string>): void;
  addArgv(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RunRequest
  ): RunRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: RunRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RunRequest;
  static deserializeBinaryFromReader(
    message: RunRequest,
    reader: jspb.BinaryReader
  ): RunRequest;
}

export namespace RunRequest {
  export type AsObject = {
    cell: number;
    cwd: string;
    argvList: Array<string>;
  };
}

export class KeyEvent extends jspb.Message {
  getCell(): number;
  setCell(value: number): void;

  getKeys(): string;
  setKeys(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: KeyEvent): KeyEvent.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: KeyEvent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): KeyEvent;
  static deserializeBinaryFromReader(
    message: KeyEvent,
    reader: jspb.BinaryReader
  ): KeyEvent;
}

export namespace KeyEvent {
  export type AsObject = {
    cell: number;
    keys: string;
  };
}

export class TermUpdate extends jspb.Message {
  clearRowsList(): void;
  getRowsList(): Array<TermUpdate.RowSpans>;
  setRowsList(value: Array<TermUpdate.RowSpans>): void;
  addRows(value?: TermUpdate.RowSpans, index?: number): TermUpdate.RowSpans;

  hasCursor(): boolean;
  clearCursor(): void;
  getCursor(): TermUpdate.Cursor | undefined;
  setCursor(value?: TermUpdate.Cursor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TermUpdate.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: TermUpdate
  ): TermUpdate.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: TermUpdate,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): TermUpdate;
  static deserializeBinaryFromReader(
    message: TermUpdate,
    reader: jspb.BinaryReader
  ): TermUpdate;
}

export namespace TermUpdate {
  export type AsObject = {
    rowsList: Array<TermUpdate.RowSpans.AsObject>;
    cursor?: TermUpdate.Cursor.AsObject;
  };

  export class RowSpans extends jspb.Message {
    getRow(): number;
    setRow(value: number): void;

    clearSpansList(): void;
    getSpansList(): Array<TermUpdate.Span>;
    setSpansList(value: Array<TermUpdate.Span>): void;
    addSpans(value?: TermUpdate.Span, index?: number): TermUpdate.Span;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RowSpans.AsObject;
    static toObject(includeInstance: boolean, msg: RowSpans): RowSpans.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: RowSpans,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): RowSpans;
    static deserializeBinaryFromReader(
      message: RowSpans,
      reader: jspb.BinaryReader
    ): RowSpans;
  }

  export namespace RowSpans {
    export type AsObject = {
      row: number;
      spansList: Array<TermUpdate.Span.AsObject>;
    };
  }

  export class Span extends jspb.Message {
    getAttr(): number;
    setAttr(value: number): void;

    getText(): string;
    setText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Span.AsObject;
    static toObject(includeInstance: boolean, msg: Span): Span.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Span,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Span;
    static deserializeBinaryFromReader(
      message: Span,
      reader: jspb.BinaryReader
    ): Span;
  }

  export namespace Span {
    export type AsObject = {
      attr: number;
      text: string;
    };
  }

  export class Cursor extends jspb.Message {
    getRow(): number;
    setRow(value: number): void;

    getCol(): number;
    setCol(value: number): void;

    getHidden(): boolean;
    setHidden(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cursor.AsObject;
    static toObject(includeInstance: boolean, msg: Cursor): Cursor.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Cursor,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Cursor;
    static deserializeBinaryFromReader(
      message: Cursor,
      reader: jspb.BinaryReader
    ): Cursor;
  }

  export namespace Cursor {
    export type AsObject = {
      row: number;
      col: number;
      hidden: boolean;
    };
  }
}

export class Hello extends jspb.Message {
  getAliasMap(): jspb.Map<string, string>;
  clearAliasMap(): void;
  getEnvMap(): jspb.Map<string, string>;
  clearEnvMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hello.AsObject;
  static toObject(includeInstance: boolean, msg: Hello): Hello.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Hello,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Hello;
  static deserializeBinaryFromReader(
    message: Hello,
    reader: jspb.BinaryReader
  ): Hello;
}

export namespace Hello {
  export type AsObject = {
    aliasMap: Array<[string, string]>;
    envMap: Array<[string, string]>;
  };
}

export class Output extends jspb.Message {
  getCell(): number;
  setCell(value: number): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  hasTermUpdate(): boolean;
  clearTermUpdate(): void;
  getTermUpdate(): TermUpdate | undefined;
  setTermUpdate(value?: TermUpdate): void;

  hasExitCode(): boolean;
  clearExitCode(): void;
  getExitCode(): number;
  setExitCode(value: number): void;

  getOutputCase(): Output.OutputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Output,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(
    message: Output,
    reader: jspb.BinaryReader
  ): Output;
}

export namespace Output {
  export type AsObject = {
    cell: number;
    error: string;
    termUpdate?: TermUpdate.AsObject;
    exitCode: number;
  };

  export enum OutputCase {
    OUTPUT_NOT_SET = 0,
    ERROR = 2,
    TERM_UPDATE = 3,
    EXIT_CODE = 4
  }
}

export class ServerMsg extends jspb.Message {
  hasHello(): boolean;
  clearHello(): void;
  getHello(): Hello | undefined;
  setHello(value?: Hello): void;

  hasComplete(): boolean;
  clearComplete(): void;
  getComplete(): CompleteResponse | undefined;
  setComplete(value?: CompleteResponse): void;

  hasOutput(): boolean;
  clearOutput(): void;
  getOutput(): Output | undefined;
  setOutput(value?: Output): void;

  getMsgCase(): ServerMsg.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMsg): ServerMsg.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ServerMsg,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ServerMsg;
  static deserializeBinaryFromReader(
    message: ServerMsg,
    reader: jspb.BinaryReader
  ): ServerMsg;
}

export namespace ServerMsg {
  export type AsObject = {
    hello?: Hello.AsObject;
    complete?: CompleteResponse.AsObject;
    output?: Output.AsObject;
  };

  export enum MsgCase {
    MSG_NOT_SET = 0,
    HELLO = 1,
    COMPLETE = 2,
    OUTPUT = 3
  }
}
