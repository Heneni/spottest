const memory = new WebAssembly.Memory({ initial: 1 });

const EMPTY_F32 = new Float32Array();
const EMPTY_U32 = new Uint32Array();

export function create_artist_map_ctx(): number {
  return 1;
}

export function decode_and_record_packed_artist_positions(_: number, __: Uint8Array, ___: boolean) {}

export function get_all_artist_data(_: number): Float32Array {
  return EMPTY_F32;
}

export function handle_new_position(
  _: number,
  __: number,
  ___: number,
  ____: number,
  _____: number,
  ______: number,
  _______: number,
  ________: boolean
): Uint32Array {
  return EMPTY_U32;
}

export function handle_received_artist_names(
  _: number,
  __: Uint32Array,
  ___: number,
  ____: number,
  _____: number,
  ______: boolean
): Uint32Array {
  return EMPTY_U32;
}

export function on_music_finished_playing(
  _: number,
  __: number,
  ___: number,
  ____: number,
  _____: number
): Uint32Array {
  return EMPTY_U32;
}

export function get_connections_buffer_ptr(_: number): number {
  return 0;
}

export function get_connections_buffer_length(_: number): number {
  return 0;
}

export function get_memory(): WebAssembly.Memory {
  return memory;
}

export function get_connections_color_buffer_ptr(_: number): number {
  return 0;
}

export function get_connections_color_buffer_length(_: number): number {
  return 0;
}

export function handle_artist_relationship_data(
  _: number,
  __: Uint8Array,
  ___: number,
  ____: number
): void {}

export function handle_set_highlighted_artists(
  _: number,
  __: Uint32Array,
  ___: number,
  ____: number,
  _____: number,
  ______: boolean
): Uint32Array {
  return EMPTY_U32;
}

export function handle_artist_manual_play(_: number, __: number): Uint32Array {
  return EMPTY_U32;
}

export function get_connections_for_artists(_: number, __: Uint32Array, ___: boolean): Float32Array {
  return EMPTY_F32;
}

export function transition_to_orbit_mode(_: number): Uint32Array {
  return EMPTY_U32;
}

export function force_render_artist_label(_: number, __: number): Uint32Array {
  return EMPTY_U32;
}

export function set_quality(_: number, __: number): void {}

export function get_artist_colors_buffer_ptr(_: number): number {
  return 0;
}

export function get_artist_colors_buffer_length(_: number): number {
  return 0;
}
