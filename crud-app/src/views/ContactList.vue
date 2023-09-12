<template>
    <div class="max-w-6xl m-auto">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Designation
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Contact No.
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody v-for="contact in contacts" :key="contact.id">
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ contact.id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ contact.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ contact.email }}
                            </td>
                            <td class="px-6 py-4">
                                {{ contact.designation }}
                            </td>
                            <td class="px-6 py-4">
                                {{ contact.contact_no }}
                            </td>
                            <td class="flex gap-4 px-6 py-4">
                                <router-link :to="{ name: 'EditContact', params: { id: contact.id}}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</router-link>
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" @click="deleteContact(contact.id)">Delete</a>
                            </td>
                        </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ContactList',
    data() {
        return {
            contacts: Array
        }
    },

    created() {
        this.getContacts();
    },

    methods: {
        async getContacts() {
            let url = 'http://127.0.0.1:8000/api/contacts';
            await axios.get(url).then(response => {
                this.contacts = response.data.contact;
                console.log(this.contacts);
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteContact(id){
            let url = `http://127.0.0.1:8000/api/delete/${id}`;
            await axios.delete(url).then(response => {
                if(response.data.code == 200){
                    alert(response.data.message);
                    this.getContacts();
                }else{
                    alert(response.data.message);
                }
            }).catch(error =>{
                console.log(error);
            });
        }
    },
    mounted() {
        console.log('Contact list component mounted');
    }
}
</script>

<style></style>