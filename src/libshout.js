// File: koffi_shout.js

const koffi = require("koffi");

// Load libshout
const libshout = koffi.load("/usr/local/lib/libshout.dylib");

// Function definitions
const shout_init = libshout.func("int shout_init()");
const shout_shutdown = libshout.func("void shout_shutdown()");
const shout_version = libshout.func(
  "string shout_version(char*, char*, char*)"
);
const shout_new = libshout.func("void* shout_new()");
const shout_free = libshout.func("void shout_free(void*)");
const shout_get_error = libshout.func("string shout_get_error(void*)");
const shout_get_errno = libshout.func("int shout_get_errno(void*)");
const shout_get_connected = libshout.func("int shout_get_connected(void*)");
const shout_set_host = libshout.func("int shout_set_host(void*, string)");
const shout_get_host = libshout.func("string shout_get_host(void*)");
const shout_set_port = libshout.func("int shout_set_port(void*, int)");
const shout_get_port = libshout.func("int shout_get_port(void*)");
const shout_set_password = libshout.func(
  "int shout_set_password(void*, string)"
);
const shout_get_password = libshout.func("string shout_get_password(void*)");
const shout_set_mount = libshout.func("int shout_set_mount(void*, string)");
const shout_get_mount = libshout.func("string shout_get_mount(void*)");
const shout_set_name = libshout.func("int shout_set_name(void*, string)");
const shout_get_name = libshout.func("string shout_get_name(void*)");
const shout_set_url = libshout.func("int shout_set_url(void*, string)");
const shout_get_url = libshout.func("string shout_get_url(void*)");
const shout_set_genre = libshout.func("int shout_set_genre(void*, string)");
const shout_get_genre = libshout.func("string shout_get_genre(void*)");
const shout_set_user = libshout.func("int shout_set_user(void*, string)");
const shout_get_user = libshout.func("string shout_get_user(void*)");
const shout_set_agent = libshout.func("int shout_set_agent(void*, string)");
const shout_get_agent = libshout.func("string shout_get_agent(void*)");
const shout_set_description = libshout.func(
  "int shout_set_description(void*, string)"
);
const shout_get_description = libshout.func(
  "string shout_get_description(void*)"
);
const shout_set_dumpfile = libshout.func(
  "int shout_set_dumpfile(void*, string)"
);
const shout_get_dumpfile = libshout.func("string shout_get_dumpfile(void*)");
const shout_set_audio_info = libshout.func(
  "int shout_set_audio_info(void*, string, string)"
);
const shout_get_audio_info = libshout.func(
  "string shout_get_audio_info(void*, string)"
);
const shout_set_public = libshout.func("int shout_set_public(void*, int)");
const shout_get_public = libshout.func("int shout_get_public(void*)");
const shout_set_format = libshout.func("int shout_set_format(void*, int)");
const shout_get_format = libshout.func("int shout_get_format(void*)");
const shout_set_protocol = libshout.func("int shout_set_protocol(void*, int)");
const shout_get_protocol = libshout.func("int shout_get_protocol(void*)");
const shout_set_nonblocking = libshout.func(
  "int shout_set_nonblocking(void*, int)"
);
const shout_get_nonblocking = libshout.func("int shout_get_nonblocking(void*)");
const shout_open = libshout.func("int shout_open(void*)");
const shout_close = libshout.func("int shout_close(void*)");
const shout_send = libshout.func("int shout_send(void*, void*, int)");
const shout_send_raw = libshout.func("int shout_send_raw(void*, void*, int)");
const shout_queuelen = libshout.func("int shout_queuelen(void*)");
const shout_sync = libshout.func("void shout_sync(void*)");
const shout_delay = libshout.func("int shout_delay(void*)");
const shout_set_metadata = libshout.func(
  "int shout_set_metadata(void*, void*)"
);
const shout_metadata_new = libshout.func("void* shout_metadata_new()");
const shout_metadata_free = libshout.func("void shout_metadata_free(void*)");
const shout_metadata_add = libshout.func(
  "int shout_metadata_add(void*, string, string)"
);

module.exports = {
  shout_init,
  shout_shutdown,
  shout_version,
  shout_new,
  shout_free,
  shout_get_error,
  shout_get_errno,
  shout_get_connected,
  shout_set_host,
  shout_get_host,
  shout_set_port,
  shout_get_port,
  shout_set_password,
  shout_get_password,
  shout_set_mount,
  shout_get_mount,
  shout_set_name,
  shout_get_name,
  shout_set_url,
  shout_get_url,
  shout_set_genre,
  shout_get_genre,
  shout_set_user,
  shout_get_user,
  shout_set_agent,
  shout_get_agent,
  shout_set_description,
  shout_get_description,
  shout_set_dumpfile,
  shout_get_dumpfile,
  shout_set_audio_info,
  shout_get_audio_info,
  shout_set_public,
  shout_get_public,
  shout_set_format,
  shout_get_format,
  shout_set_protocol,
  shout_get_protocol,
  shout_set_nonblocking,
  shout_get_nonblocking,
  shout_open,
  shout_close,
  shout_send,
  shout_send_raw,
  shout_queuelen,
  shout_sync,
  shout_delay,
  shout_set_metadata,
  shout_metadata_new,
  shout_metadata_free,
  shout_metadata_add,
};
