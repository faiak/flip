export const capitalize = (text: string) => {
  const lower = text.toLowerCase();
  return text.charAt(0).toUpperCase() + lower.slice(1);
};

export const getBankName = (name: string) => {
  return name.length < 5 ? name.toUpperCase() : capitalize(name);
};

export const formatMoney = (value: number) => {
  return `Rp${value.toLocaleString('id')}`;
};

export function formatDate(date: string) {
  let dateFormatted = new Date(date.split('-').join('/'));
  const day = dateFormatted.getDate();
  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ][dateFormatted.getMonth()];
  const year = dateFormatted.getFullYear();

  return `${day} ${month} ${year}`;

  // NOT WORK ON ANDROID
  // return new Date(date).toLocaleDateString('id-ID', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });
}

export const isInclude = (fullText: string, text: string) => {
  return fullText.toLowerCase().includes(text.toLowerCase());
};
