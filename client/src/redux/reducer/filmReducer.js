import { createSlice } from '@reduxjs/toolkit'
import PhimLe from '../../data/PhimLe.json'

const initialState = {
  listPhimLe: [],
  listPhimBo: [],
  ListPhimChieuRap: [],
  listPhimLeMoiCapNhat: [],
  listPhimChieuRapTheoNam: [],
}

const filmReducer = createSlice({
  name: "film",
  initialState,
  reducers: {
    getPhimLe: (state, action) => {
      state.listPhimLe = PhimLe;
    },
    getPhimLeMoiCapNhat: (state, action) => {
      state.listPhimLeMoiCapNhat = state.listPhimLe;
    },
    getPhimLeTheoTheLoai: (state, action) => {
      const gettheloai = action.payload;
      const list = [];
      state.listPhimLe.forEach((film, index) => {
        film.theloai.forEach((item, index) => {
          if (item === gettheloai) {
            list.push(film);
          }
        })
      })
      state.listPhimLeMoiCapNhat = list;
    },
    getPhimChieuRap: (state, action) => {
      const list = [];
      state.listPhimLe.forEach((film, index) => {
        film.theloai.forEach((item, index) => {
          if (item === "phim chiếu rạp") {
            list.push(film);
          }
        })
      })
      state.ListPhimChieuRap = list;
      state.listPhimChieuRapTheoNam = state.ListPhimChieuRap;
    },
    getPhimChieuRapTheoNam: (state, action) => {
      const getYear = action.payload;
      let newphimchieurap = state.ListPhimChieuRap.filter(film => film.nam_phat_hanh === getYear);
      state.listPhimChieuRapTheoNam = newphimchieurap;
    }
  }
});

export const { getPhimLe, getPhimChieuRap, getPhimLeMoiCapNhat, getPhimLeTheoTheLoai, getPhimChieuRapTheoNam } = filmReducer.actions

export default filmReducer.reducer