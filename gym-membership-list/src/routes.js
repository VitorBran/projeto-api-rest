import showMemberships from './components/showMemberships.vue'
import addMembership from './components/addMembership.vue'
import showMembership from './components/showMembership.vue'
import updateMembership from './components/updateMembership.vue'
import workoutLog from './components/workoutLog.vue'

export default [
  { path: '/', component: showMemberships },
  { path: '/add', component: addMembership },
  { path: '/membership/:id', component: showMembership },
  { path: '/updateMembership/membership/:id', component: updateMembership},
  { path: '/workoutLog/membership/:id', component: workoutLog}
]
