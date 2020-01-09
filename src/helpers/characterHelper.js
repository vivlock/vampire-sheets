const playerClans = [
  { label: 'Brujah', value: 'brujah' },
  { label: 'Caitiff', value: 'caitiff' },
  { label: 'Gangrel', value: 'gangrel' },
  { label: 'Malkavian', value: 'malkavian' },
  { label: 'Nosferatu', value: 'nosferatu' },
  { label: 'Samedi ', value: 'samedi' },
  { label: 'Toreador', value: 'toreador' },
  { label: 'Tremere ', value: 'tremere' },
  { label: 'Ventrue ', value: 'ventrue' }
];

const allClans = [
  { label: 'Banu Haqim / Assamite', value: 'assamite' },
  { label: 'Giovanni', value: 'giovanni' },
  { label: 'Lasombra', value: 'lasombra' },
  { label: 'The Ministry / Settite', value: 'ministry' },
  { label: 'Ravnos', value: 'ravnos' },
  { label: 'Tzimisce', value: 'tzimisce' },
  ...playerClans
];

export function fetchClans( role ) {
  if( role === 'player' ) {
    return playerClans;
  }
  return allClans;
}