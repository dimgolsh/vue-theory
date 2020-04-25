export default {
  data() {
    return {
      names: ["Vlas", "Max", "Elena", "Igor"],
      searchName: ""
    };
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      });
    }
  }
};
