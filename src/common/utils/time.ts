export function tempoParaSegundos(tempo: string) {
  const [horas = 0, minutos = 0, segundos = 0] = tempo.split(":").map(Number);
  return segundos + 60 * minutos + 3600 * horas;
}
