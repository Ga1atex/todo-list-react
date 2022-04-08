import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DB_URL
});

export const notesAPI = {
  async fetchNotes() {
    const response = await axiosInstance.get(`/notes.json`);

    return response
  },
  async addNote(newNote) {
    const response = await axiosInstance.post(`/notes.json`, newNote)

    return response
  },
  async removeNote(id) {
    const response = await axiosInstance.delete(`/notes/${id}.json`, id);

    return response;
  },
  async toggleNote(note) {
    const response = await axiosInstance.put(`/notes/${note.id}.json`,
    { ...note, completed: !note.completed });

    return response;
  }


}
