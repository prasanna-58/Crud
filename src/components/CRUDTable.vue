<template>
  <div id="app">
    <input
      type="text"
      v-model="search_input"
      @input="searchFields()"
      label="Search"
      placeholder="search"
    />
    <button type="submit" @click="clear()">Clear</button>
    <button type="submit" @click="addUserModal()">Create</button>
    <table>
      <tr>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
      </tr>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.email }}
          </td>
          <td><button type="submit" @click="editModal(item)">Edit</button></td>
          <td>
            <button type="submit" @click="deleteUser(item.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <dialog ref="modal">
      <form method="dialog">
        <input
          v-model="name"
          type="text"
          label="Name"
          placeholder="Enter name"
        />
        <input
          v-model="email"
          type="email"
          label="Email"
          placeholder="Enter email"
        />
        <button type="submit" @click="editUser()">OK</button>
      </form>
    </dialog>
    <dialog ref="add_user">
      <form method="dialog">
        <input
          v-model="name"
          type="text"
          label="Name"
          placeholder="Enter name"
        />
        <input
          v-model="email"
          type="email"
          label="Email"
          placeholder="Enter email"
        />
        <button type="submit" @click="addUser()">OK</button>
      </form>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      name: "",
      results: "",
      email: "",
      search_input: "",
      id: "",
    };
  },
  async mounted() {
    this.items = await this.getData();
  },
  methods: {
    searchFields() {
      this.items = this.items.filter((item) => {
        return item.name.includes(this.search_input);
      });
    },
    async clear() {
      this.search_input = "";
      this.items = await this.getData();
    },
    getData() {
      return new Promise(async (resolve, reject) => {
        // https://www.mecallapi.com/api/users
        let results = await fetch(
          "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData"
        );
        let data = await results.json();
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    },
    editModal(item) {
      this.$refs.modal.show();
      this.name = item.name;
      this.email = item.email;
      this.id = item.id;
      this.results = item;
    },
    async editUser() {
      this.results.name = this.name;
      this.results.email = this.email;
      var user_details = JSON.stringify(this.results);
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: user_details,
      };

      // https://www.mecallapi.com/api/users/update
      await fetch(
        `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${this.id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log("data-->", data));
      this.items = await this.getData();
    },
    async deleteUser(id) {
      var user_details = JSON.stringify({ id: id });
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: user_details,
      };
      // https://www.mecallapi.com/api/users/delete
      await fetch(
        `https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log("data-->", data));
      this.items = await this.getData();
    },
    async addUser() {
      var user_details = JSON.stringify({
        name: this.name,
        email: this.email,
        avatar: "https://www.mecallapi.com/users/cat.png",
      });
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: user_details,
      };
      // https://www.mecallapi.com/api/users/create
      await fetch(
        "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log("data-->", data));
      this.items = await this.getData();
    },
    addUserModal() {
      this.name = "";
      this.email = "";
      this.$refs.add_user.show();
    },
  },
};
</script>
