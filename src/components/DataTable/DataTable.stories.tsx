import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { DataTable, DataTableOptions, Header } from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
} as Meta;

type Jadwal = {
  kode: string;
  mataKuliah: string;
  jurusan: string;
  jadwalKuliah: string;
  jadwalUTS: string;
  jadwalUAS: string;
  kelas: string;
  ruangan: string;
  reg: string;
};

const headers: Header<Jadwal>[] = [
  { key: "kode", title: "Kode", sortable: true },
  { key: "mataKuliah", title: "Mata Kuliah", sortable: true },
  { key: "jurusan", title: "Jurusan", sortable: true },
  { key: "jadwalKuliah", title: "Jadwal Kuliah", sortable: true },
  { key: "jadwalUTS", title: "Jadwal UTS", sortable: true },
  { key: "jadwalUAS", title: "Jadwal UAS", sortable: true },
  { key: "kelas", title: "Kelas", sortable: true },
  { key: "ruangan", title: "Ruangan", sortable: true },
  { key: "reg", title: "Reg", sortable: true },
];

const allData: Jadwal[] = [
  {
    kode: "ART101",
    mataKuliah: "Graphic Design Fundamentals",
    jurusan: "Informatika",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "A",
    ruangan: "Design Studio A",
    reg: "A",
  },
  {
    kode: "ART103",
    mataKuliah: "Digital Illustration",
    jurusan: "Informatika",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "B",
    ruangan: "Computer Lab 2",
    reg: "BI",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },

  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
  {
    kode: "UXD301",
    mataKuliah: "UX/UI Design Principles",
    jurusan: "Bahasa Inggris",
    jadwalKuliah: "Senin, 07.00–09.00",
    jadwalUTS: "Senin, 07.00–09.00",
    jadwalUAS: "Senin, 07.00–09.00",
    kelas: "C",
    ruangan: "Design Lab 1",
    reg: "A",
  },
];

export const Paginated = () => {
  const [options, setOptions] = useState<DataTableOptions<Jadwal>>({
    page: 1,
    itemsPerPage: 10,
    sortBy: "kode",
    sortDesc: false,
  });

  const sorted = [...allData].sort((a, b) => {
    if (!options.sortBy) return 0;
    const valA = a[options.sortBy];
    const valB = b[options.sortBy];
    return options.sortDesc
      ? String(valB).localeCompare(String(valA))
      : String(valA).localeCompare(String(valB));
  });

  const paginated = sorted.slice(
    (options.page - 1) * options.itemsPerPage,
    options.page * options.itemsPerPage
  );

  return (
    <DataTable<Jadwal>
      headers={headers}
      items={paginated}
      totalItems={allData.length}
      loading={false}
      options={options}
      onOptionsChange={setOptions}
    />
  );
};
