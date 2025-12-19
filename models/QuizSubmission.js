const mongoose = require('mongoose');

const quizSubmissionSchema = new mongoose.Schema({
  // Links to the quiz being submitted
  quizId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Quiz', 
    required: true 
  },
  
  // Links to the intern who submitted
  internId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  // Array of user's answers (matches your reference code)
  answers: [{
    questionIndex: { 
      type: Number, 
      required: true, 
      min: 0 
    },
    selectedOptionIndex: { 
      type: Number, 
      required: true, 
      min: 0 
    }
  }],
  
  // Auto-calculated scoring
  score: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 100 
  },
  
  // Percentage score (rounded)
  percentage: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 100 
  },
  
  // Total questions in quiz
  totalQuestions: { 
    type: Number, 
    required: true, 
    min: 1 
  },
  
  // Number of correct answers
  correctAnswers: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  
  // Pass/Fail status
  status: { 
    type: String, 
    enum: ['passed', 'failed'], 
    required: true 
  }
  
}, { 
  timestamps: true // createdAt, updatedAt
});

// Index for fast queries
quizSubmissionSchema.index({ quizId: 1, internId: 1 }, { unique: true });
quizSubmissionSchema.index({ internId: 1 });
quizSubmissionSchema.index({ quizId: 1 });

module.exports = mongoose.model('QuizSubmission', quizSubmissionSchema);
