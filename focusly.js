
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const settingsBtn = document.getElementById('settings-btn');
const timerState = document.getElementById('timer-state');
const modeBtns = document.querySelectorAll('.mode-btn');

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const completedCount = document.getElementById('completed-count');

const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');
const saveSettings = document.getElementById('save-settings');
const focusTimeInput = document.getElementById('focus-time');
const shortBreakInput = document.getElementById('short-break');
const longBreakInput = document.getElementById('long-break');
const pomodoroCountInput = document.getElementById('pomodoro-count');

let timer;
let timeLeft;
let totalTime;
let isRunning = false;
let currentMode = 'focus';
let completedPomodoros = 0;
let endTime = null;

let timeSettings = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
    pomodoroCount: 4
};

let todos = [];

function initTimer() {
    timeLeft = timeSettings[currentMode];
    totalTime = timeLeft;
    updateTimeDisplay();
    updateTimerState();
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(timeLeft);
}

function updateTimerState() {
    if (isRunning) {
        if (currentMode === 'focus') {
            timerState.textContent = 'Focusing';
        } else if (currentMode === 'shortBreak') {
            timerState.textContent = 'Short Break';
        } else {
            timerState.textContent = 'Long Break';
        }
    } else {
        if (currentMode === 'focus') {
            timerState.textContent = 'Ready to focus';
        } else if (currentMode === 'shortBreak') {
            timerState.textContent = 'Ready for a short break';
        } else {
            timerState.textContent = 'Ready for a long break';
        }
    }
}

function startTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Start';
        updateTimerState();
        return;
    }

    isRunning = true;
    startBtn.textContent = 'Pause';
    updateTimerState();

    // More accurate timing
    endTime = Date.now() + timeLeft * 1000;

    timer = setInterval(() => {
        const now = Date.now();
        timeLeft = Math.max(0, Math.round((endTime - now) / 1000));

        updateTimeDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            startBtn.textContent = 'Start';
            alert('Timer complete!');

            if (currentMode === 'focus') {
                completedPomodoros++;
                if (completedPomodoros % timeSettings.pomodoroCount === 0) {
                    switchMode('longBreak');
                } else {
                    switchMode('shortBreak');
                }
            } else {
                switchMode('focus');
            }
        }
    }, 250); // Check 4x a second for smoothness
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
    initTimer();
}

function switchMode(mode) {
    currentMode = mode;
    modeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });
    resetTimer();
}

function updateCompletedCount() {
    const completed = todos.filter(todo => todo.completed).length;
    completedCount.textContent = `${completed}/${todos.length}`;
}

function addTodo(text) {
    const todo = {
        id: Date.now(),
        text,
        completed: false
    };
    todos.push(todo);
    renderTodos();
    updateCompletedCount();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
    updateCompletedCount();
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
    updateCompletedCount();
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id));

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'todo-delete';
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchMode(btn.dataset.mode);
    });
});

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = '';
    }
});

settingsBtn.addEventListener('click', () => {
    focusTimeInput.value = Math.floor(timeSettings.focus / 60);
    shortBreakInput.value = Math.floor(timeSettings.shortBreak / 60);
    longBreakInput.value = Math.floor(timeSettings.longBreak / 60);
    pomodoroCountInput.value = timeSettings.pomodoroCount;
    settingsModal.style.display = 'flex';
});

closeSettings.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

saveSettings.addEventListener('click', () => {
    timeSettings.focus = parseInt(focusTimeInput.value) * 60;
    timeSettings.shortBreak = parseInt(shortBreakInput.value) * 60;
    timeSettings.longBreak = parseInt(longBreakInput.value) * 60;
    timeSettings.pomodoroCount = parseInt(pomodoroCountInput.value);
    resetTimer();
    settingsModal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

initTimer();
renderTodos();

 
