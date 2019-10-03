
const console_ = {
  // level
  level: 'error'
}

const file_ = {
  // level
  level: 'info',
  // flags
  flags: 'a+',
  // Pasta da log
  folder: 'logs',
  // Tamanho maximo do arquivo em MB
  max_size: 10,
  // Quantidade maxima de arquivos de log
  max_files: 10,
  // Encoding do arquivo
  encoding: 'utf8'
}

module.exports = {
  console_,
  file_
};
