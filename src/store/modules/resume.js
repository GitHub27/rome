const app = {
    state: {
        projectList: []
    },
    mutations: {
        ADD_PROJECT: (state, project) => {
            this.projectList.push(project);
        }
    },
    actions: {
        addProject: ({ commit }, project) => {
            commit('ADD_PROJECT', project)
        }
    }
}

export default app
