// Code generated by protoc-gen-go. DO NOT EDIT.
// source: smash.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Message from client to server.
type ClientMessage struct {
	// Types that are valid to be assigned to Msg:
	//	*ClientMessage_Complete
	//	*ClientMessage_Run
	//	*ClientMessage_Key
	Msg                  isClientMessage_Msg `protobuf_oneof:"msg"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *ClientMessage) Reset()         { *m = ClientMessage{} }
func (m *ClientMessage) String() string { return proto.CompactTextString(m) }
func (*ClientMessage) ProtoMessage()    {}
func (*ClientMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{0}
}

func (m *ClientMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ClientMessage.Unmarshal(m, b)
}
func (m *ClientMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ClientMessage.Marshal(b, m, deterministic)
}
func (m *ClientMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ClientMessage.Merge(m, src)
}
func (m *ClientMessage) XXX_Size() int {
	return xxx_messageInfo_ClientMessage.Size(m)
}
func (m *ClientMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_ClientMessage.DiscardUnknown(m)
}

var xxx_messageInfo_ClientMessage proto.InternalMessageInfo

type isClientMessage_Msg interface {
	isClientMessage_Msg()
}

type ClientMessage_Complete struct {
	Complete *CompleteRequest `protobuf:"bytes,1,opt,name=complete,proto3,oneof"`
}

type ClientMessage_Run struct {
	Run *RunRequest `protobuf:"bytes,2,opt,name=run,proto3,oneof"`
}

type ClientMessage_Key struct {
	Key *KeyEvent `protobuf:"bytes,3,opt,name=key,proto3,oneof"`
}

func (*ClientMessage_Complete) isClientMessage_Msg() {}

func (*ClientMessage_Run) isClientMessage_Msg() {}

func (*ClientMessage_Key) isClientMessage_Msg() {}

func (m *ClientMessage) GetMsg() isClientMessage_Msg {
	if m != nil {
		return m.Msg
	}
	return nil
}

func (m *ClientMessage) GetComplete() *CompleteRequest {
	if x, ok := m.GetMsg().(*ClientMessage_Complete); ok {
		return x.Complete
	}
	return nil
}

func (m *ClientMessage) GetRun() *RunRequest {
	if x, ok := m.GetMsg().(*ClientMessage_Run); ok {
		return x.Run
	}
	return nil
}

func (m *ClientMessage) GetKey() *KeyEvent {
	if x, ok := m.GetMsg().(*ClientMessage_Key); ok {
		return x.Key
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ClientMessage) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ClientMessage_Complete)(nil),
		(*ClientMessage_Run)(nil),
		(*ClientMessage_Key)(nil),
	}
}

// Request to complete a partial command-line input.
type CompleteRequest struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Cwd                  string   `protobuf:"bytes,2,opt,name=cwd,proto3" json:"cwd,omitempty"`
	Input                string   `protobuf:"bytes,3,opt,name=input,proto3" json:"input,omitempty"`
	Pos                  int32    `protobuf:"varint,4,opt,name=pos,proto3" json:"pos,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CompleteRequest) Reset()         { *m = CompleteRequest{} }
func (m *CompleteRequest) String() string { return proto.CompactTextString(m) }
func (*CompleteRequest) ProtoMessage()    {}
func (*CompleteRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{1}
}

func (m *CompleteRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CompleteRequest.Unmarshal(m, b)
}
func (m *CompleteRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CompleteRequest.Marshal(b, m, deterministic)
}
func (m *CompleteRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CompleteRequest.Merge(m, src)
}
func (m *CompleteRequest) XXX_Size() int {
	return xxx_messageInfo_CompleteRequest.Size(m)
}
func (m *CompleteRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CompleteRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CompleteRequest proto.InternalMessageInfo

func (m *CompleteRequest) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *CompleteRequest) GetCwd() string {
	if m != nil {
		return m.Cwd
	}
	return ""
}

func (m *CompleteRequest) GetInput() string {
	if m != nil {
		return m.Input
	}
	return ""
}

func (m *CompleteRequest) GetPos() int32 {
	if m != nil {
		return m.Pos
	}
	return 0
}

// Response to a CompleteRequest.
type CompleteResponse struct {
	Id                   int32    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Error                string   `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
	Pos                  int32    `protobuf:"varint,3,opt,name=pos,proto3" json:"pos,omitempty"`
	Completions          []string `protobuf:"bytes,4,rep,name=completions,proto3" json:"completions,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CompleteResponse) Reset()         { *m = CompleteResponse{} }
func (m *CompleteResponse) String() string { return proto.CompactTextString(m) }
func (*CompleteResponse) ProtoMessage()    {}
func (*CompleteResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{2}
}

func (m *CompleteResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CompleteResponse.Unmarshal(m, b)
}
func (m *CompleteResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CompleteResponse.Marshal(b, m, deterministic)
}
func (m *CompleteResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CompleteResponse.Merge(m, src)
}
func (m *CompleteResponse) XXX_Size() int {
	return xxx_messageInfo_CompleteResponse.Size(m)
}
func (m *CompleteResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CompleteResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CompleteResponse proto.InternalMessageInfo

func (m *CompleteResponse) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *CompleteResponse) GetError() string {
	if m != nil {
		return m.Error
	}
	return ""
}

func (m *CompleteResponse) GetPos() int32 {
	if m != nil {
		return m.Pos
	}
	return 0
}

func (m *CompleteResponse) GetCompletions() []string {
	if m != nil {
		return m.Completions
	}
	return nil
}

// Request to spawn a command.
type RunRequest struct {
	Cell                 int32    `protobuf:"varint,1,opt,name=cell,proto3" json:"cell,omitempty"`
	Cwd                  string   `protobuf:"bytes,2,opt,name=cwd,proto3" json:"cwd,omitempty"`
	Argv                 []string `protobuf:"bytes,3,rep,name=argv,proto3" json:"argv,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RunRequest) Reset()         { *m = RunRequest{} }
func (m *RunRequest) String() string { return proto.CompactTextString(m) }
func (*RunRequest) ProtoMessage()    {}
func (*RunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{3}
}

func (m *RunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RunRequest.Unmarshal(m, b)
}
func (m *RunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RunRequest.Marshal(b, m, deterministic)
}
func (m *RunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RunRequest.Merge(m, src)
}
func (m *RunRequest) XXX_Size() int {
	return xxx_messageInfo_RunRequest.Size(m)
}
func (m *RunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_RunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_RunRequest proto.InternalMessageInfo

func (m *RunRequest) GetCell() int32 {
	if m != nil {
		return m.Cell
	}
	return 0
}

func (m *RunRequest) GetCwd() string {
	if m != nil {
		return m.Cwd
	}
	return ""
}

func (m *RunRequest) GetArgv() []string {
	if m != nil {
		return m.Argv
	}
	return nil
}

// Keystroke sent to running command.
type KeyEvent struct {
	Cell                 int32    `protobuf:"varint,1,opt,name=cell,proto3" json:"cell,omitempty"`
	Keys                 string   `protobuf:"bytes,2,opt,name=keys,proto3" json:"keys,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KeyEvent) Reset()         { *m = KeyEvent{} }
func (m *KeyEvent) String() string { return proto.CompactTextString(m) }
func (*KeyEvent) ProtoMessage()    {}
func (*KeyEvent) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{4}
}

func (m *KeyEvent) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KeyEvent.Unmarshal(m, b)
}
func (m *KeyEvent) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KeyEvent.Marshal(b, m, deterministic)
}
func (m *KeyEvent) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KeyEvent.Merge(m, src)
}
func (m *KeyEvent) XXX_Size() int {
	return xxx_messageInfo_KeyEvent.Size(m)
}
func (m *KeyEvent) XXX_DiscardUnknown() {
	xxx_messageInfo_KeyEvent.DiscardUnknown(m)
}

var xxx_messageInfo_KeyEvent proto.InternalMessageInfo

func (m *KeyEvent) GetCell() int32 {
	if m != nil {
		return m.Cell
	}
	return 0
}

func (m *KeyEvent) GetKeys() string {
	if m != nil {
		return m.Keys
	}
	return ""
}

// Termial update, server -> client.
type TermUpdate struct {
	// Updates to specific rows of output.
	Rows []*TermUpdate_RowSpans `protobuf:"bytes,1,rep,name=rows,proto3" json:"rows,omitempty"`
	// Cursor position.
	Cursor               *TermUpdate_Cursor `protobuf:"bytes,2,opt,name=cursor,proto3" json:"cursor,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *TermUpdate) Reset()         { *m = TermUpdate{} }
func (m *TermUpdate) String() string { return proto.CompactTextString(m) }
func (*TermUpdate) ProtoMessage()    {}
func (*TermUpdate) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{5}
}

func (m *TermUpdate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TermUpdate.Unmarshal(m, b)
}
func (m *TermUpdate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TermUpdate.Marshal(b, m, deterministic)
}
func (m *TermUpdate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TermUpdate.Merge(m, src)
}
func (m *TermUpdate) XXX_Size() int {
	return xxx_messageInfo_TermUpdate.Size(m)
}
func (m *TermUpdate) XXX_DiscardUnknown() {
	xxx_messageInfo_TermUpdate.DiscardUnknown(m)
}

var xxx_messageInfo_TermUpdate proto.InternalMessageInfo

func (m *TermUpdate) GetRows() []*TermUpdate_RowSpans {
	if m != nil {
		return m.Rows
	}
	return nil
}

func (m *TermUpdate) GetCursor() *TermUpdate_Cursor {
	if m != nil {
		return m.Cursor
	}
	return nil
}

type TermUpdate_RowSpans struct {
	Row                  int32              `protobuf:"varint,1,opt,name=row,proto3" json:"row,omitempty"`
	Spans                []*TermUpdate_Span `protobuf:"bytes,2,rep,name=spans,proto3" json:"spans,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *TermUpdate_RowSpans) Reset()         { *m = TermUpdate_RowSpans{} }
func (m *TermUpdate_RowSpans) String() string { return proto.CompactTextString(m) }
func (*TermUpdate_RowSpans) ProtoMessage()    {}
func (*TermUpdate_RowSpans) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{5, 0}
}

func (m *TermUpdate_RowSpans) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TermUpdate_RowSpans.Unmarshal(m, b)
}
func (m *TermUpdate_RowSpans) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TermUpdate_RowSpans.Marshal(b, m, deterministic)
}
func (m *TermUpdate_RowSpans) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TermUpdate_RowSpans.Merge(m, src)
}
func (m *TermUpdate_RowSpans) XXX_Size() int {
	return xxx_messageInfo_TermUpdate_RowSpans.Size(m)
}
func (m *TermUpdate_RowSpans) XXX_DiscardUnknown() {
	xxx_messageInfo_TermUpdate_RowSpans.DiscardUnknown(m)
}

var xxx_messageInfo_TermUpdate_RowSpans proto.InternalMessageInfo

func (m *TermUpdate_RowSpans) GetRow() int32 {
	if m != nil {
		return m.Row
	}
	return 0
}

func (m *TermUpdate_RowSpans) GetSpans() []*TermUpdate_Span {
	if m != nil {
		return m.Spans
	}
	return nil
}

type TermUpdate_Span struct {
	Attr                 int32    `protobuf:"varint,1,opt,name=attr,proto3" json:"attr,omitempty"`
	Text                 string   `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TermUpdate_Span) Reset()         { *m = TermUpdate_Span{} }
func (m *TermUpdate_Span) String() string { return proto.CompactTextString(m) }
func (*TermUpdate_Span) ProtoMessage()    {}
func (*TermUpdate_Span) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{5, 1}
}

func (m *TermUpdate_Span) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TermUpdate_Span.Unmarshal(m, b)
}
func (m *TermUpdate_Span) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TermUpdate_Span.Marshal(b, m, deterministic)
}
func (m *TermUpdate_Span) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TermUpdate_Span.Merge(m, src)
}
func (m *TermUpdate_Span) XXX_Size() int {
	return xxx_messageInfo_TermUpdate_Span.Size(m)
}
func (m *TermUpdate_Span) XXX_DiscardUnknown() {
	xxx_messageInfo_TermUpdate_Span.DiscardUnknown(m)
}

var xxx_messageInfo_TermUpdate_Span proto.InternalMessageInfo

func (m *TermUpdate_Span) GetAttr() int32 {
	if m != nil {
		return m.Attr
	}
	return 0
}

func (m *TermUpdate_Span) GetText() string {
	if m != nil {
		return m.Text
	}
	return ""
}

type TermUpdate_Cursor struct {
	Row                  int32    `protobuf:"varint,1,opt,name=row,proto3" json:"row,omitempty"`
	Col                  int32    `protobuf:"varint,2,opt,name=col,proto3" json:"col,omitempty"`
	Hidden               bool     `protobuf:"varint,3,opt,name=hidden,proto3" json:"hidden,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TermUpdate_Cursor) Reset()         { *m = TermUpdate_Cursor{} }
func (m *TermUpdate_Cursor) String() string { return proto.CompactTextString(m) }
func (*TermUpdate_Cursor) ProtoMessage()    {}
func (*TermUpdate_Cursor) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{5, 2}
}

func (m *TermUpdate_Cursor) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TermUpdate_Cursor.Unmarshal(m, b)
}
func (m *TermUpdate_Cursor) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TermUpdate_Cursor.Marshal(b, m, deterministic)
}
func (m *TermUpdate_Cursor) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TermUpdate_Cursor.Merge(m, src)
}
func (m *TermUpdate_Cursor) XXX_Size() int {
	return xxx_messageInfo_TermUpdate_Cursor.Size(m)
}
func (m *TermUpdate_Cursor) XXX_DiscardUnknown() {
	xxx_messageInfo_TermUpdate_Cursor.DiscardUnknown(m)
}

var xxx_messageInfo_TermUpdate_Cursor proto.InternalMessageInfo

func (m *TermUpdate_Cursor) GetRow() int32 {
	if m != nil {
		return m.Row
	}
	return 0
}

func (m *TermUpdate_Cursor) GetCol() int32 {
	if m != nil {
		return m.Col
	}
	return 0
}

func (m *TermUpdate_Cursor) GetHidden() bool {
	if m != nil {
		return m.Hidden
	}
	return false
}

// Message from server to client on connection.
type Hello struct {
	// Command aliases, from alias name to expansion.
	Alias map[string]string `protobuf:"bytes,1,rep,name=alias,proto3" json:"alias,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// Environment variables
	Env                  map[string]string `protobuf:"bytes,2,rep,name=env,proto3" json:"env,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Hello) Reset()         { *m = Hello{} }
func (m *Hello) String() string { return proto.CompactTextString(m) }
func (*Hello) ProtoMessage()    {}
func (*Hello) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{6}
}

func (m *Hello) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Hello.Unmarshal(m, b)
}
func (m *Hello) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Hello.Marshal(b, m, deterministic)
}
func (m *Hello) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Hello.Merge(m, src)
}
func (m *Hello) XXX_Size() int {
	return xxx_messageInfo_Hello.Size(m)
}
func (m *Hello) XXX_DiscardUnknown() {
	xxx_messageInfo_Hello.DiscardUnknown(m)
}

var xxx_messageInfo_Hello proto.InternalMessageInfo

func (m *Hello) GetAlias() map[string]string {
	if m != nil {
		return m.Alias
	}
	return nil
}

func (m *Hello) GetEnv() map[string]string {
	if m != nil {
		return m.Env
	}
	return nil
}

// Message from server to client about a running subprocess.
type Output struct {
	Cell int32 `protobuf:"varint,1,opt,name=cell,proto3" json:"cell,omitempty"`
	// Types that are valid to be assigned to Output:
	//	*Output_Error
	//	*Output_TermUpdate
	//	*Output_ExitCode
	Output               isOutput_Output `protobuf_oneof:"output"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Output) Reset()         { *m = Output{} }
func (m *Output) String() string { return proto.CompactTextString(m) }
func (*Output) ProtoMessage()    {}
func (*Output) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{7}
}

func (m *Output) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Output.Unmarshal(m, b)
}
func (m *Output) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Output.Marshal(b, m, deterministic)
}
func (m *Output) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Output.Merge(m, src)
}
func (m *Output) XXX_Size() int {
	return xxx_messageInfo_Output.Size(m)
}
func (m *Output) XXX_DiscardUnknown() {
	xxx_messageInfo_Output.DiscardUnknown(m)
}

var xxx_messageInfo_Output proto.InternalMessageInfo

func (m *Output) GetCell() int32 {
	if m != nil {
		return m.Cell
	}
	return 0
}

type isOutput_Output interface {
	isOutput_Output()
}

type Output_Error struct {
	Error string `protobuf:"bytes,2,opt,name=error,proto3,oneof"`
}

type Output_TermUpdate struct {
	TermUpdate *TermUpdate `protobuf:"bytes,3,opt,name=term_update,json=termUpdate,proto3,oneof"`
}

type Output_ExitCode struct {
	ExitCode int32 `protobuf:"varint,4,opt,name=exit_code,json=exitCode,proto3,oneof"`
}

func (*Output_Error) isOutput_Output() {}

func (*Output_TermUpdate) isOutput_Output() {}

func (*Output_ExitCode) isOutput_Output() {}

func (m *Output) GetOutput() isOutput_Output {
	if m != nil {
		return m.Output
	}
	return nil
}

func (m *Output) GetError() string {
	if x, ok := m.GetOutput().(*Output_Error); ok {
		return x.Error
	}
	return ""
}

func (m *Output) GetTermUpdate() *TermUpdate {
	if x, ok := m.GetOutput().(*Output_TermUpdate); ok {
		return x.TermUpdate
	}
	return nil
}

func (m *Output) GetExitCode() int32 {
	if x, ok := m.GetOutput().(*Output_ExitCode); ok {
		return x.ExitCode
	}
	return 0
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*Output) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*Output_Error)(nil),
		(*Output_TermUpdate)(nil),
		(*Output_ExitCode)(nil),
	}
}

type ServerMsg struct {
	// Types that are valid to be assigned to Msg:
	//	*ServerMsg_Hello
	//	*ServerMsg_Complete
	//	*ServerMsg_Output
	Msg                  isServerMsg_Msg `protobuf_oneof:"msg"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *ServerMsg) Reset()         { *m = ServerMsg{} }
func (m *ServerMsg) String() string { return proto.CompactTextString(m) }
func (*ServerMsg) ProtoMessage()    {}
func (*ServerMsg) Descriptor() ([]byte, []int) {
	return fileDescriptor_85c015dadfa1ff75, []int{8}
}

func (m *ServerMsg) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ServerMsg.Unmarshal(m, b)
}
func (m *ServerMsg) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ServerMsg.Marshal(b, m, deterministic)
}
func (m *ServerMsg) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ServerMsg.Merge(m, src)
}
func (m *ServerMsg) XXX_Size() int {
	return xxx_messageInfo_ServerMsg.Size(m)
}
func (m *ServerMsg) XXX_DiscardUnknown() {
	xxx_messageInfo_ServerMsg.DiscardUnknown(m)
}

var xxx_messageInfo_ServerMsg proto.InternalMessageInfo

type isServerMsg_Msg interface {
	isServerMsg_Msg()
}

type ServerMsg_Hello struct {
	Hello *Hello `protobuf:"bytes,1,opt,name=hello,proto3,oneof"`
}

type ServerMsg_Complete struct {
	Complete *CompleteResponse `protobuf:"bytes,2,opt,name=complete,proto3,oneof"`
}

type ServerMsg_Output struct {
	Output *Output `protobuf:"bytes,3,opt,name=output,proto3,oneof"`
}

func (*ServerMsg_Hello) isServerMsg_Msg() {}

func (*ServerMsg_Complete) isServerMsg_Msg() {}

func (*ServerMsg_Output) isServerMsg_Msg() {}

func (m *ServerMsg) GetMsg() isServerMsg_Msg {
	if m != nil {
		return m.Msg
	}
	return nil
}

func (m *ServerMsg) GetHello() *Hello {
	if x, ok := m.GetMsg().(*ServerMsg_Hello); ok {
		return x.Hello
	}
	return nil
}

func (m *ServerMsg) GetComplete() *CompleteResponse {
	if x, ok := m.GetMsg().(*ServerMsg_Complete); ok {
		return x.Complete
	}
	return nil
}

func (m *ServerMsg) GetOutput() *Output {
	if x, ok := m.GetMsg().(*ServerMsg_Output); ok {
		return x.Output
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ServerMsg) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ServerMsg_Hello)(nil),
		(*ServerMsg_Complete)(nil),
		(*ServerMsg_Output)(nil),
	}
}

func init() {
	proto.RegisterType((*ClientMessage)(nil), "proto.ClientMessage")
	proto.RegisterType((*CompleteRequest)(nil), "proto.CompleteRequest")
	proto.RegisterType((*CompleteResponse)(nil), "proto.CompleteResponse")
	proto.RegisterType((*RunRequest)(nil), "proto.RunRequest")
	proto.RegisterType((*KeyEvent)(nil), "proto.KeyEvent")
	proto.RegisterType((*TermUpdate)(nil), "proto.TermUpdate")
	proto.RegisterType((*TermUpdate_RowSpans)(nil), "proto.TermUpdate.RowSpans")
	proto.RegisterType((*TermUpdate_Span)(nil), "proto.TermUpdate.Span")
	proto.RegisterType((*TermUpdate_Cursor)(nil), "proto.TermUpdate.Cursor")
	proto.RegisterType((*Hello)(nil), "proto.Hello")
	proto.RegisterMapType((map[string]string)(nil), "proto.Hello.AliasEntry")
	proto.RegisterMapType((map[string]string)(nil), "proto.Hello.EnvEntry")
	proto.RegisterType((*Output)(nil), "proto.Output")
	proto.RegisterType((*ServerMsg)(nil), "proto.ServerMsg")
}

func init() { proto.RegisterFile("smash.proto", fileDescriptor_85c015dadfa1ff75) }

var fileDescriptor_85c015dadfa1ff75 = []byte{
	// 644 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0x8d, 0xe3, 0x38, 0x4a, 0x26, 0x94, 0xb6, 0xab, 0x92, 0x5a, 0x91, 0x90, 0x2a, 0x03, 0x6a,
	0x0f, 0x10, 0xa1, 0x50, 0x50, 0xc5, 0x8d, 0x86, 0xa2, 0x08, 0x54, 0x21, 0x6d, 0xe1, 0xc4, 0xa1,
	0x32, 0xf1, 0x28, 0xb5, 0xe2, 0x78, 0xcd, 0xee, 0x3a, 0x69, 0xbe, 0x83, 0x0b, 0x9f, 0xc1, 0xaf,
	0xf0, 0x47, 0x68, 0x76, 0xd7, 0x4d, 0x43, 0x72, 0xe1, 0xe4, 0x59, 0xcf, 0x9b, 0x37, 0x33, 0x6f,
	0x67, 0x07, 0x3a, 0x6a, 0x16, 0xab, 0x9b, 0x7e, 0x21, 0x85, 0x16, 0x2c, 0x30, 0x9f, 0xe8, 0x97,
	0x07, 0x3b, 0xc3, 0x2c, 0xc5, 0x5c, 0x5f, 0xa2, 0x52, 0xf1, 0x04, 0xd9, 0x29, 0xb4, 0xc6, 0x62,
	0x56, 0x64, 0xa8, 0x31, 0xf4, 0x8e, 0xbc, 0x93, 0xce, 0xa0, 0x6b, 0x43, 0xfa, 0x43, 0xf7, 0x9b,
	0xe3, 0x8f, 0x12, 0x95, 0x1e, 0xd5, 0xf8, 0x1d, 0x92, 0x3d, 0x03, 0x5f, 0x96, 0x79, 0x58, 0x37,
	0x01, 0xfb, 0x2e, 0x80, 0x97, 0xf9, 0x0a, 0x4b, 0x7e, 0xf6, 0x04, 0xfc, 0x29, 0x2e, 0x43, 0xdf,
	0xc0, 0x76, 0x1d, 0xec, 0x13, 0x2e, 0x2f, 0xe6, 0x98, 0x1b, 0xd0, 0x14, 0x97, 0xe7, 0x01, 0xf8,
	0x33, 0x35, 0x89, 0xbe, 0xc1, 0xee, 0x3f, 0x19, 0xd9, 0x43, 0xa8, 0xa7, 0x89, 0xa9, 0x2a, 0xe0,
	0xf5, 0x34, 0x61, 0x7b, 0xe0, 0x8f, 0x17, 0x89, 0xc9, 0xda, 0xe6, 0x64, 0xb2, 0x03, 0x08, 0xd2,
	0xbc, 0x28, 0xb5, 0x49, 0xd1, 0xe6, 0xf6, 0x40, 0xb8, 0x42, 0xa8, 0xb0, 0x61, 0x02, 0xc9, 0x8c,
	0x32, 0xd8, 0x5b, 0x91, 0xab, 0x42, 0xe4, 0x0a, 0x37, 0xd8, 0x0f, 0x20, 0x40, 0x29, 0x85, 0x74,
	0xfc, 0xf6, 0x50, 0x71, 0xf9, 0x77, 0x5c, 0xec, 0x08, 0x3a, 0x4e, 0x87, 0x54, 0xe4, 0x94, 0xc5,
	0x3f, 0x69, 0xf3, 0xfb, 0xbf, 0xa2, 0x0f, 0x00, 0x2b, 0x2d, 0x18, 0x83, 0xc6, 0x18, 0xb3, 0xcc,
	0x65, 0x32, 0xf6, 0x96, 0x4e, 0x18, 0x34, 0x62, 0x39, 0x99, 0x87, 0xbe, 0xa1, 0x33, 0x76, 0x34,
	0x80, 0x56, 0x25, 0xd6, 0x56, 0x16, 0x06, 0x8d, 0x29, 0x2e, 0x95, 0xa3, 0x31, 0x76, 0xf4, 0xbb,
	0x0e, 0xf0, 0x05, 0xe5, 0xec, 0x6b, 0x91, 0xc4, 0x1a, 0x59, 0x1f, 0x1a, 0x52, 0x2c, 0x54, 0xe8,
	0x1d, 0xf9, 0x27, 0x9d, 0x41, 0xcf, 0x5d, 0xc1, 0x0a, 0xd0, 0xe7, 0x62, 0x71, 0x55, 0xc4, 0xb9,
	0xe2, 0x06, 0xc7, 0x5e, 0x42, 0x73, 0x5c, 0x4a, 0xe5, 0x54, 0xe8, 0x0c, 0xc2, 0xcd, 0x88, 0xa1,
	0xf1, 0x73, 0x87, 0xeb, 0x7d, 0x84, 0x56, 0xc5, 0x41, 0x6d, 0x49, 0xb1, 0x70, 0x35, 0x92, 0xc9,
	0x9e, 0x43, 0xa0, 0xc8, 0x15, 0xd6, 0x4d, 0x01, 0xdd, 0x4d, 0x3a, 0x8a, 0xe4, 0x16, 0xd4, 0xeb,
	0x43, 0x83, 0x8e, 0x46, 0x0c, 0xad, 0x65, 0xd5, 0x2c, 0xd9, 0xf4, 0x4f, 0xe3, 0xad, 0xae, 0x9a,
	0x25, 0xbb, 0xf7, 0x1e, 0x9a, 0xb6, 0x9a, 0x2d, 0x99, 0x49, 0x62, 0x91, 0x19, 0x78, 0xc0, 0xc9,
	0x64, 0x5d, 0x68, 0xde, 0xa4, 0x49, 0x82, 0xb9, 0xb9, 0xcd, 0x16, 0x77, 0xa7, 0xe8, 0x8f, 0x07,
	0xc1, 0x08, 0xb3, 0x4c, 0xb0, 0x17, 0x10, 0xc4, 0x59, 0x1a, 0x57, 0x72, 0x1d, 0xba, 0x6a, 0x8d,
	0xb3, 0xff, 0x8e, 0x3c, 0x17, 0xb9, 0x96, 0x4b, 0x6e, 0x51, 0xec, 0x18, 0x7c, 0xcc, 0xe7, 0xae,
	0xb5, 0x47, 0x6b, 0xe0, 0x8b, 0x7c, 0x6e, 0xa1, 0x84, 0xe8, 0x9d, 0x01, 0xac, 0xa2, 0xa9, 0x32,
	0x7a, 0x15, 0x9e, 0xbd, 0xfc, 0x29, 0x2e, 0x69, 0xf4, 0xe6, 0x71, 0x56, 0x62, 0x35, 0x7a, 0xe6,
	0xf0, 0xb6, 0x7e, 0xe6, 0xf5, 0xde, 0x40, 0xab, 0xa2, 0xfa, 0x9f, 0xb8, 0xe8, 0xa7, 0x07, 0xcd,
	0xcf, 0xa5, 0xa6, 0xd7, 0xb0, 0x6d, 0x72, 0xba, 0x6b, 0xb3, 0x3e, 0xaa, 0x55, 0xd3, 0x7e, 0x0a,
	0x1d, 0x8d, 0x72, 0x76, 0x5d, 0x9a, 0xbb, 0x71, 0x0f, 0x77, 0x7f, 0xe3, 0xd2, 0x46, 0x35, 0x0e,
	0x7a, 0x35, 0x64, 0x8f, 0xa1, 0x8d, 0xb7, 0xa9, 0xbe, 0x1e, 0x8b, 0x04, 0xed, 0xab, 0xa3, 0x65,
	0x41, 0xbf, 0x86, 0x22, 0xc1, 0xf3, 0x16, 0x34, 0x85, 0x29, 0x85, 0xd6, 0x4f, 0xfb, 0x0a, 0xe5,
	0x1c, 0xe5, 0xa5, 0x9a, 0xb0, 0xa7, 0x10, 0xdc, 0x90, 0x58, 0x6e, 0xef, 0x3c, 0xb8, 0x2f, 0x20,
	0x95, 0x64, 0x9c, 0xec, 0xf5, 0xbd, 0x05, 0x65, 0x67, 0xf2, 0x70, 0x63, 0x41, 0xd9, 0x17, 0xbd,
	0xb6, 0xa1, 0x8e, 0xab, 0xa4, 0xae, 0x89, 0x1d, 0x17, 0x64, 0x45, 0x19, 0xd5, 0xb8, 0x73, 0xbb,
	0xf5, 0xf3, 0xbd, 0x69, 0xdc, 0xaf, 0xfe, 0x06, 0x00, 0x00, 0xff, 0xff, 0x8d, 0x9e, 0xc8, 0xb2,
	0x36, 0x05, 0x00, 0x00,
}
