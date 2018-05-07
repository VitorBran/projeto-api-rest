const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  muscularGroup: {
    type: String,
    required: [true, 'muscularGroup is required']
  },
  name: {
    type: String,
    required: [true, 'Exercise name is required']
  },
  sets: {
    type: Number,
    required: [true, 'Number of sets is required']
  },
  repetitions: {
    type: Number,
    required: [true, 'Number of repetitions is required']
  }
});

const MembershipSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  birthDate: {
    type: String,
    required: [true, 'Birth Date is required']
  },
  gymInstructor: {
    type: String,
    required: [true, 'Gym Instructor is required']
  },
  startDate: {
    type: String,
    required: [true, 'Start Date is required']
  },
  goals: {
    type: [String],
    required: [true, 'Goals are required']
  },
  exercises: []
});

const Membership = mongoose.model('membership', MembershipSchema);

module.exports = Membership;
