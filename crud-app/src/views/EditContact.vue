<template>
    <div class="max-w-6xl m-auto text-left">
        <p class="text-4xl font-bold text-blue-600 mb-4">Add Contact</p>
        <form @submit.prevent="updateContact" novalidate>
            <div class="border-[1px] mb-4 rounded-xl border-red-600 p-4" v-if="errors.length">
                <ul class="list-decimal px-4">
                    <li v-for="(error, index) in errors" :key="index" class="text-red-600 text-sm">{{ error }}</li>
                </ul>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" v-model="contact.name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="email" v-model="contact.email"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                    Address</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" v-model="contact.designation"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_designation"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Designation</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" v-model="contact.contact_no"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required />
                <label for="floating_number"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                    Number</label>
            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'EditContact',
    components: {

    },
    data() {
        return {
            contact: {},
            name: '',
            email: '',
            designation: '',
            contact_no: '',
            errors: []
        }

    },
    created() {
        this.getContact()
    },
    methods: {
        async getContact() {
            let url = `http://127.0.0.1:8000/api/get_contact/${this.$route.params.id}`;
            await axios.get(url).then(Response => {
                this.contact = Response.data
            }).catch(error => {
                console.log(error);
            });
        },
        async updateContact() {
            this.errors = [];
            if (!this.contact.name) {
                this.errors.push("Name cannot be empty")
            };
            if (!this.contact.email) {
                this.errors.push("Email cannot be empty")
            };
            if (!this.contact.designation) {
                this.errors.push("Designation cannot be empty")
            };
            if (!this.contact.contact_no) {
                this.errors.push("contact Number cannot be empty")
            };
            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('name', this.contact.name);
                formData.append('email', this.contact.email);
                formData.append('designation', this.contact.designation);
                formData.append('contact_no', this.contact.contact_no);
                let url = `http://127.0.0.1:8000/api/update_contact/${this.$route.params.id}`;
                await axios.post(url, formData).then(Response => {
                    console.log(Response);
                    if (Response.data.code == 200) {
                        this.contact.name = '';
                        this.contact.email = '';
                        this.contact.designation = '';
                        this.contact.contact_no = '';
                        alert(Response.data.message);
                        this.getContact();
                    };
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    },
    mounted() {
        console.log('this has been mounted')
    }
}
</script>
  