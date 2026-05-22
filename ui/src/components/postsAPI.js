const API_BASE = '/api';

export const postsAPI = {
  create: async (postData) => {
    const res = await fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    });

    return res.json();
  },

  getAll: async () => {
    const res = await fetch(`${API_BASE}/posts`);

    return res.json();
  },

  getOne: async (id) => {
    const res = await fetch(`${API_BASE}/posts/${id}`);

    return res.json();
  },

  update: async (postData) => {
    const res = await fetch(`${API_BASE}/posts`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    });

    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${API_BASE}/posts/${id}`, {
      method: 'DELETE'
    });

    return res.json();
  }
};