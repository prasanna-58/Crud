<template>
  <div id="app">
    <input type="text" v-model="search_input" @input="searchFields()" label="Search" />
    <button type="submit" @click="clear()">Clear</button>
    <button type="submit" @click="addUserModal()">Create</button>
    <table>
      <tr>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </thead>
      </tr>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            {{ item.fname }}
          </td>
          <td>
            {{ item.lname }}
          </td>
          <td><button type="submit" @click="editModal(item)">Edit</button></td>
          <td><button type="submit" @click="deleteUser(item.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <dialog ref="modal">
      <form method="dialog">
        <input v-model="fname" type="text" label="FirstName" />
        <input v-model="lname" type="text" label="LastName" />
        <button type="submit" @click="editUser()">OK</button>
      </form>
    </dialog>
    <dialog ref="add_user">
      <form method="dialog">
        <input v-model="fname" type="text" label="FirstName" />
        <input v-model="lname" type="text" label="LastName" />
        <input v-model="username" type="text" label="UserName" />
        <input v-model="email" type="email" label="Email" />
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
        fname: "",
        lname: "",
        results: "",
        username: "",
        email: "",
        search_input: "",
      };
    },
    async mounted() {
      this.items = await this.getData();
    },
    methods: {
      searchFields() {
        this.items = this.items.filter((item) => {
          return item.fname.includes(this.search_input);
        });
      },
      async clear() {
        this.items = await this.getData();
      },
      getData() {
        return new Promise(async (resolve, reject) => {
          let results = await fetch("https://www.mecallapi.com/api/users");
          let data = await results.json();
          resolve(data);
        }).catch((err) => {
          reject(err);
        });
      },
      editModal(item) {
        this.$refs.modal.show();
        this.fname = item.fname;
        this.lname = item.lname;
        this.results = item;
      },
      async editUser() {
        this.results.fname = this.fname;
        this.results.lname = this.lname;
        var user_details = JSON.stringify(this.results);
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: user_details,
        };
        await fetch("https://www.mecallapi.com/api/users/update", requestOptions)
          .then((response) => response.json())
          .then((data) => alert(JSON.stringify(data)));
        this.items = await this.getData();
      },
      async deleteUser(id) {
        var user_details = JSON.stringify({ id: id });
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: user_details,
        };
        await fetch("https://www.mecallapi.com/api/users/delete", requestOptions)
          .then((response) => response.json())
          .then((data) => alert(JSON.stringify(data)));
        this.items = await this.getData();
      },
      async addUser() {
        var user_details = JSON.stringify({ fname: this.fname, lname: this.lname, username: this.username, email: this.email, avatar: "https://www.mecallapi.com/users/cat.png" });
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: user_details,
        };
        await fetch("https://www.mecallapi.com/api/users/create", requestOptions)
          .then((response) => response.json())
          .then((data) => alert(JSON.stringify(data)));
        this.items = await this.getData();
      },
      addUserModal() {
        this.$refs.add_user.show();
      },
    },
  };
</script>
