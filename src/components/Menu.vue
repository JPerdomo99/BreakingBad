<template>
    <div class="menu">
        <v-navigation-drawer color="blue accent-4" v-model="sidebar" app>
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

        <v-app-bar color="blue accent-4" app>
            <span class="hidden-sm-and-up">
                <v-app-bar-nav-icon color="white" @click="sidebar = !sidebar"></v-app-bar-nav-icon>
            </span>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    <img
                    src="@/assets/logo.png"
                    alt="RTS ENVIRONMENTAL SERVICES, INC."
                    class="mt-8 hidden-sm-and-down"
                    height="50px"
                    />
                    <img
                    src="@/assets/logo.png"
                    alt="RTS ENVIRONMENTAL SERVICES, INC."
                    class="mt-1 hidden-md-and-up"
                    height="50px"
                    />
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-xs-only">
                    <v-btn text v-for="(item, index) in menuItems" :key="index" :to="{name: item.route}">
                        <v-icon color="white">
                        {{ item.icon }}
                        </v-icon>
                        <span class="white--text">{{ item.title }}</span>
                    </v-btn>
                </v-toolbar-items>
        </v-app-bar>
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
            ]
        }
    }
}
</script>
