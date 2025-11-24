// Temporary stub implementation used when the compiled WASM engine is unavailable.
// The functions mirror the interface expected by `WasmClient.worker.ts` but return
// inert data so the application can still build and run without the WebAssembly
// artifacts.

const memory = new WebAssembly.Memory({ initial: 1 });

const warnOnce = (() => {
  let warned = false;
  return () => {
    if (!warned) {
      // eslint-disable-next-line no-console
      console.warn('[engine] Using fallback stub implementation; WASM engine is unavailable.');
      warned = true;
    }
  };
})();

export function create_artist_map_ctx(): number {
  warnOnce();
  return 0;
}

export function decode_and_record_packed_artist_positions(): void {
  warnOnce();
}

export function get_all_artist_data(): Float32Array {
  warnOnce();
  return new Float32Array();
}

export function handle_new_position(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function handle_received_artist_names(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function on_music_finished_playing(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function get_connections_buffer_ptr(): number {
  warnOnce();
  return 0;
}

export function get_connections_buffer_length(): number {
  warnOnce();
  return 0;
}

export function get_memory(): WebAssembly.Memory {
  warnOnce();
  return memory;
}

export function get_connections_color_buffer_ptr(): number {
  warnOnce();
  return 0;
}

export function get_connections_color_buffer_length(): number {
  warnOnce();
  return 0;
}

export function handle_artist_relationship_data(): void {
  warnOnce();
}

export function handle_set_highlighted_artists(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function handle_artist_manual_play(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function get_connections_for_artists(): Float32Array {
  warnOnce();
  return new Float32Array();
}

export function transition_to_orbit_mode(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function force_render_artist_label(): Uint32Array {
  warnOnce();
  return new Uint32Array();
}

export function set_quality(): void {
  warnOnce();
}
