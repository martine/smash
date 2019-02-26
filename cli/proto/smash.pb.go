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
	return fileDescriptor_85c015dadfa1ff75, []int{0}
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

type Output struct {
	Cell int32 `protobuf:"varint,1,opt,name=cell,proto3" json:"cell,omitempty"`
	// Types that are valid to be assigned to Output:
	//	*Output_Text
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
	return fileDescriptor_85c015dadfa1ff75, []int{1}
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

type Output_Text struct {
	Text string `protobuf:"bytes,2,opt,name=text,proto3,oneof"`
}

type Output_ExitCode struct {
	ExitCode int32 `protobuf:"varint,3,opt,name=exit_code,json=exitCode,proto3,oneof"`
}

func (*Output_Text) isOutput_Output() {}

func (*Output_ExitCode) isOutput_Output() {}

func (m *Output) GetOutput() isOutput_Output {
	if m != nil {
		return m.Output
	}
	return nil
}

func (m *Output) GetText() string {
	if x, ok := m.GetOutput().(*Output_Text); ok {
		return x.Text
	}
	return ""
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
		(*Output_Text)(nil),
		(*Output_ExitCode)(nil),
	}
}

type ServerMsg struct {
	// Types that are valid to be assigned to Msg:
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
	return fileDescriptor_85c015dadfa1ff75, []int{2}
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

type ServerMsg_Output struct {
	Output *Output `protobuf:"bytes,1,opt,name=output,proto3,oneof"`
}

func (*ServerMsg_Output) isServerMsg_Msg() {}

func (m *ServerMsg) GetMsg() isServerMsg_Msg {
	if m != nil {
		return m.Msg
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
		(*ServerMsg_Output)(nil),
	}
}

func init() {
	proto.RegisterType((*RunRequest)(nil), "proto.RunRequest")
	proto.RegisterType((*Output)(nil), "proto.Output")
	proto.RegisterType((*ServerMsg)(nil), "proto.ServerMsg")
}

func init() { proto.RegisterFile("smash.proto", fileDescriptor_85c015dadfa1ff75) }

var fileDescriptor_85c015dadfa1ff75 = []byte{
	// 205 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x2e, 0xce, 0x4d, 0x2c,
	0xce, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x05, 0x53, 0x4a, 0x6e, 0x5c, 0x5c, 0x41,
	0xa5, 0x79, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x42, 0x42, 0x5c, 0x2c, 0xc9, 0xa9, 0x39,
	0x39, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0xac, 0x41, 0x60, 0xb6, 0x90, 0x00, 0x17, 0x73, 0x72, 0x79,
	0x8a, 0x04, 0x93, 0x02, 0xa3, 0x06, 0x67, 0x10, 0x88, 0x09, 0x52, 0x95, 0x58, 0x94, 0x5e, 0x26,
	0xc1, 0xac, 0xc0, 0xac, 0xc1, 0x19, 0x04, 0x66, 0x2b, 0x45, 0x73, 0xb1, 0xf9, 0x97, 0x96, 0x14,
	0x94, 0x62, 0x37, 0x43, 0x84, 0x8b, 0xa5, 0x24, 0xb5, 0xa2, 0x04, 0x62, 0x88, 0x07, 0x43, 0x10,
	0x98, 0x27, 0x24, 0xcb, 0xc5, 0x99, 0x5a, 0x91, 0x59, 0x12, 0x9f, 0x9c, 0x9f, 0x92, 0x2a, 0xc1,
	0x0c, 0x52, 0xee, 0xc1, 0x10, 0xc4, 0x01, 0x12, 0x72, 0xce, 0x4f, 0x49, 0x75, 0xe2, 0xe0, 0x62,
	0xcb, 0x07, 0x1b, 0xa9, 0x64, 0xcd, 0xc5, 0x19, 0x9c, 0x5a, 0x54, 0x96, 0x5a, 0xe4, 0x5b, 0x9c,
	0x2e, 0xa4, 0x0e, 0x13, 0x06, 0xdb, 0xc0, 0x6d, 0xc4, 0x0b, 0xf1, 0x90, 0x1e, 0xc4, 0x7a, 0x0f,
	0x86, 0x20, 0xa8, 0xb4, 0x13, 0x2b, 0x17, 0x73, 0x6e, 0x71, 0x7a, 0x12, 0x1b, 0x58, 0xda, 0x18,
	0x10, 0x00, 0x00, 0xff, 0xff, 0x56, 0xc3, 0x4c, 0x2d, 0xfe, 0x00, 0x00, 0x00,
}
