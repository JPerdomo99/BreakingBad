<template>
    <div class="menu">
        <v-app-bar color="transparent" class="elevation-10" app>
            <span>
                <v-app-bar-nav-icon class="icon" color="blue accent-4" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>

            <span class="ml-3 headline font-italic font-weight-regular">Breaking Bad</span>
        </v-app-bar>

        <v-navigation-drawer 
        color="blue accent-4"
        class="elevation-10"
        v-model="sidebar" app>
        <v-list>
               <v-img
                height="250"
                src="../assets/img/Waltersvg.svg"
                ></v-img>
            </v-list>
            <v-list>
                <v-list-item v-for="(item, index) in menuItems" :key="index" :to="{name: item.route}" active-class="active" exact>
                    <v-list-item-icon >
                        <v-icon color="white">
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="itemtitle white--text">{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    data(){
        return {
            sidebar: false,
            menuItems: [
                {title: 'Characters', icon: 'mdi-account-group', route: 'Characters'},
                {title: 'Episodes', icon: 'mdi-youtube-tv', route: 'Episodes'},
                {title: 'Quotes', icon: 'mdi-comment-processing', route: 'Quotes'}
            ],
        }
    }
}
</script>
