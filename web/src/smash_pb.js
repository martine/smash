/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.Output', null, global);
goog.exportSymbol('proto.proto.RunRequest', null, global);
goog.exportSymbol('proto.proto.ServerMsg', null, global);
goog.exportSymbol('proto.proto.TermState', null, global);
goog.exportSymbol('proto.proto.TermText', null, global);
goog.exportSymbol('proto.proto.TermText.Span', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.RunRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.RunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.RunRequest.displayName = 'proto.proto.RunRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.RunRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.RunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.RunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.RunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cell: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cwd: jspb.Message.getFieldWithDefault(msg, 2, ""),
    argvList: jspb.Message.getRepeatedField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RunRequest}
 */
proto.proto.RunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RunRequest;
  return proto.proto.RunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RunRequest}
 */
proto.proto.RunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCell(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCwd(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgv(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.RunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCell();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCwd();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getArgvList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional int32 cell = 1;
 * @return {number}
 */
proto.proto.RunRequest.prototype.getCell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.RunRequest.prototype.setCell = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string cwd = 2;
 * @return {string}
 */
proto.proto.RunRequest.prototype.getCwd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.RunRequest.prototype.setCwd = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string argv = 3;
 * @return {!Array<string>}
 */
proto.proto.RunRequest.prototype.getArgvList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.proto.RunRequest.prototype.setArgvList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.proto.RunRequest.prototype.addArgv = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.proto.RunRequest.prototype.clearArgvList = function() {
  this.setArgvList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TermText = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.TermText.repeatedFields_, null);
};
goog.inherits(proto.proto.TermText, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.TermText.displayName = 'proto.proto.TermText';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.TermText.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TermText.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TermText.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TermText} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermText.toObject = function(includeInstance, msg) {
  var f, obj = {
    row: jspb.Message.getFieldWithDefault(msg, 1, 0),
    spansList: jspb.Message.toObjectList(msg.getSpansList(),
    proto.proto.TermText.Span.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TermText}
 */
proto.proto.TermText.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TermText;
  return proto.proto.TermText.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TermText} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TermText}
 */
proto.proto.TermText.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRow(value);
      break;
    case 2:
      var value = new proto.proto.TermText.Span;
      reader.readMessage(value,proto.proto.TermText.Span.deserializeBinaryFromReader);
      msg.addSpans(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TermText.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TermText.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TermText} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermText.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRow();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSpansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.proto.TermText.Span.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TermText.Span = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TermText.Span, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.TermText.Span.displayName = 'proto.proto.TermText.Span';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TermText.Span.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TermText.Span.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TermText.Span} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermText.Span.toObject = function(includeInstance, msg) {
  var f, obj = {
    attr: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TermText.Span}
 */
proto.proto.TermText.Span.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TermText.Span;
  return proto.proto.TermText.Span.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TermText.Span} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TermText.Span}
 */
proto.proto.TermText.Span.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttr(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TermText.Span.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TermText.Span.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TermText.Span} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermText.Span.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAttr();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 attr = 1;
 * @return {number}
 */
proto.proto.TermText.Span.prototype.getAttr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.TermText.Span.prototype.setAttr = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.proto.TermText.Span.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.TermText.Span.prototype.setText = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 row = 1;
 * @return {number}
 */
proto.proto.TermText.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.TermText.prototype.setRow = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Span spans = 2;
 * @return {!Array<!proto.proto.TermText.Span>}
 */
proto.proto.TermText.prototype.getSpansList = function() {
  return /** @type{!Array<!proto.proto.TermText.Span>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.TermText.Span, 2));
};


/** @param {!Array<!proto.proto.TermText.Span>} value */
proto.proto.TermText.prototype.setSpansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.proto.TermText.Span=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.TermText.Span}
 */
proto.proto.TermText.prototype.addSpans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.proto.TermText.Span, opt_index);
};


proto.proto.TermText.prototype.clearSpansList = function() {
  this.setSpansList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.TermState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.TermState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.TermState.displayName = 'proto.proto.TermState';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.TermState.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.TermState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.TermState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermState.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.TermState}
 */
proto.proto.TermState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.TermState;
  return proto.proto.TermState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.TermState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.TermState}
 */
proto.proto.TermState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.TermState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.TermState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.TermState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.TermState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.Output.oneofGroups_);
};
goog.inherits(proto.proto.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.Output.displayName = 'proto.proto.Output';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.Output.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.proto.Output.OutputCase = {
  OUTPUT_NOT_SET: 0,
  ERROR: 2,
  TEXT: 3,
  EXIT_CODE: 4
};

/**
 * @return {proto.proto.Output.OutputCase}
 */
proto.proto.Output.prototype.getOutputCase = function() {
  return /** @type {proto.proto.Output.OutputCase} */(jspb.Message.computeOneofCase(this, proto.proto.Output.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    cell: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: (f = msg.getText()) && proto.proto.TermText.toObject(includeInstance, f),
    exitCode: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.Output}
 */
proto.proto.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Output;
  return proto.proto.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Output}
 */
proto.proto.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCell(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = new proto.proto.TermText;
      reader.readMessage(value,proto.proto.TermText.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCell();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.proto.TermText.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 cell = 1;
 * @return {number}
 */
proto.proto.Output.prototype.getCell = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.proto.Output.prototype.setCell = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.proto.Output.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.Output.prototype.setError = function(value) {
  jspb.Message.setOneofField(this, 2, proto.proto.Output.oneofGroups_[0], value);
};


proto.proto.Output.prototype.clearError = function() {
  jspb.Message.setOneofField(this, 2, proto.proto.Output.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.Output.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TermText text = 3;
 * @return {?proto.proto.TermText}
 */
proto.proto.Output.prototype.getText = function() {
  return /** @type{?proto.proto.TermText} */ (
    jspb.Message.getWrapperField(this, proto.proto.TermText, 3));
};


/** @param {?proto.proto.TermText|undefined} value */
proto.proto.Output.prototype.setText = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.proto.Output.oneofGroups_[0], value);
};


proto.proto.Output.prototype.clearText = function() {
  this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.Output.prototype.hasText = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 exit_code = 4;
 * @return {number}
 */
proto.proto.Output.prototype.getExitCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.Output.prototype.setExitCode = function(value) {
  jspb.Message.setOneofField(this, 4, proto.proto.Output.oneofGroups_[0], value);
};


proto.proto.Output.prototype.clearExitCode = function() {
  jspb.Message.setOneofField(this, 4, proto.proto.Output.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.Output.prototype.hasExitCode = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.ServerMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.proto.ServerMsg.oneofGroups_);
};
goog.inherits(proto.proto.ServerMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ServerMsg.displayName = 'proto.proto.ServerMsg';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.proto.ServerMsg.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.proto.ServerMsg.MsgCase = {
  MSG_NOT_SET: 0,
  OUTPUT: 1
};

/**
 * @return {proto.proto.ServerMsg.MsgCase}
 */
proto.proto.ServerMsg.prototype.getMsgCase = function() {
  return /** @type {proto.proto.ServerMsg.MsgCase} */(jspb.Message.computeOneofCase(this, proto.proto.ServerMsg.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.ServerMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ServerMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ServerMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ServerMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: (f = msg.getOutput()) && proto.proto.Output.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.ServerMsg}
 */
proto.proto.ServerMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ServerMsg;
  return proto.proto.ServerMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ServerMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ServerMsg}
 */
proto.proto.ServerMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.Output;
      reader.readMessage(value,proto.proto.Output.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.ServerMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ServerMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ServerMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ServerMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.proto.Output.serializeBinaryToWriter
    );
  }
};


/**
 * optional Output output = 1;
 * @return {?proto.proto.Output}
 */
proto.proto.ServerMsg.prototype.getOutput = function() {
  return /** @type{?proto.proto.Output} */ (
    jspb.Message.getWrapperField(this, proto.proto.Output, 1));
};


/** @param {?proto.proto.Output|undefined} value */
proto.proto.ServerMsg.prototype.setOutput = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.proto.ServerMsg.oneofGroups_[0], value);
};


proto.proto.ServerMsg.prototype.clearOutput = function() {
  this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ServerMsg.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.proto);
