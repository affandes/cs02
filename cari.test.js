/**
 * File ini tidak perlu diubah
 * Silahkan ubah file cari.js
 */

const cari = require('./cari');

const koleksi = [24,20,8,12,19,7,23,14,5,11,12,21];

test('Mencari angka 19', () => {
    const kueri = 19;
    const hasil = 4;
    expect(cari(koleksi,kueri)).toBe(hasil);
});

test('Mencari angka 12', () => {
    const kueri = 12;
    const hasil = 3;
    expect(cari(koleksi,kueri)).toBe(hasil);
});

test('Mencari angka 44', () => {
    const kueri = 44;
    const hasil = 'tidak ditemukan!';
    expect(cari(koleksi,kueri)).toBe(hasil);
});