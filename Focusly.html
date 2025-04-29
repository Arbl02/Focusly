<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Study Timer with To-Do List</title>
    <style>
        :root {
            --bg: #ecf0f3;
            --shadow-dark: rgba(0, 0, 0, 0.15);
            --shadow-light: rgba(255, 255, 255, 0.8);
            --text: #333;
            --highlight: #0080ff;
        }
        
         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            /*  or Segoe UI', Tahoma, Geneva, Verdana, sans-serif */
        }

        body {
            background-color: var(--bg);
            color: var(--text);
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }

        h1 {
            font-size: 3.5rem;
            color: var(--text);
            font-weight: 750;
            text-align: center;
        }
        .p {
            font-size: 0.875rem;
            color: #D8D8D6;
            font-weight: 400;
            text-align: center;
        }

        .container {
            width: 100%;
            max-width: 768px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .card {
            background-color: var(--bg);
            border-radius: 20px;
            padding: 25px;
            box-shadow: 8px 8px 15px var(--shadow-dark),
                        -8px -8px 15px var(--shadow-light);
            margin-bottom: 30px;
        }

        .timer-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .timer-display {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            box-shadow: inset 8px 8px 15px var(--shadow-dark),
                        inset -8px -8px 15px var(--shadow-light);
        }

        .time {
            font-size: 4.5rem;
            font-weight: 720;
        }

        .button-group {
            display: flex;
            gap: 15px;
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 50px;
            background-color: var(--bg);
            color: var(--text);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 5px 5px 10px var(--shadow-dark),
                        -5px -5px 10px var(--shadow-light);
        }

        .btn:hover {
            box-shadow: 3px 3px 6px var(--shadow-dark),
                        -3px -3px 6px var(--shadow-light);
        }

        .btn:active {
            box-shadow: inset 3px 3px 6px var(--shadow-dark),
                        inset -3px -3px 6px var(--shadow-light);
        }

        .btn-primary {
            background: var(--highlight);
            color: white;
        }

        .todo-card {
            display: flex;
            flex-direction: column;
        }

        .todo-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .todo-form {
            display: flex;
            margin-bottom: 20px;
            gap: 10px;
        }

        .input-field {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 50px;
            background-color: var(--bg);
            box-shadow: inset 5px 5px 10px var(--shadow-dark),
                        inset -5px -5px 10px var(--shadow-light);
            color: var(--text);
            font-size: 16px;
        }

        .input-field:focus {
            outline: none;
            box-shadow: inset 3px 3px 6px var(--shadow-dark),
                        inset -3px -3px 6px var(--shadow-light);
        }

        .todo-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-height: 300px;
            overflow-y: auto;
            padding-right: 5px;
        }

        .todo-item {
            display: flex;
            align-items: center;
            padding: 15px;
            border-radius: 15px;
            box-shadow: 0px 2px 2px var(--shadow-dark), -0px -2px 2px var (--shadow-light);
            gap: 10px;
        }

        .todo-item.completed {
            opacity: 0.7;
        }

        .todo-item.completed .todo-text {
            text-decoration: line-through;
        }

        .todo-checkbox {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: var(--bg);
            box-shadow: inset 2px 2px 5px var(--shadow-dark),
                        inset -2px -2px 5px var(--shadow-light);
            cursor: pointer;
            position: relative;
        }

        .todo-checkbox:checked::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: var(--highlight);
        }

        .todo-text {
            flex: 1;
            font-size: 16px;
        }

        .todo-delete {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 18px;
            color: #ff5757;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 100;
        }

        .modal-content {
            background-color: var(--bg);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 8px 8px 15px var(--shadow-dark);
            width: 90%;
            max-width: 500px;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--text);
        }

        .timer-settings {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .setting-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .setting-label {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .setting-input {
            padding: 12px 20px;
            border: none;
            border-radius: 50px;
            background-color: var(--bg);
            box-shadow: inset 5px 5px 10px var(--shadow-dark),
                        inset -5px -5px 10px var(--shadow-light);
            color: var(--text);
            font-size: 16px;
        }

        .timer-info {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .timer-state {
            font-weight: 600;
            font-size: 18px;
        }

        .timer-modes {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .mode-btn {
            padding: 8px 16px;
            border: none;
            border-radius: 50px;
            background-color: var(--bg);
            color: var(--text);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 3px 3px 6px var(--shadow-dark),
                        -3px -3px 6px var(--shadow-light);
        }

        .mode-btn.active {
            background: var(--highlight);
            color: white;
        }

        .completed-count {
            background-color: var(--highlight);
            color: white;
            border-radius: 50px;
            padding: 5px 12px;
            font-size: 14px;
            font-weight: 600;
        }

        .settings-btn {
            background: none;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 3px 3px 6px var(--shadow-dark),
                        -3px -3px 6px var(--shadow-light);
        }

        .settings-icon {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 768px) {
            .timer-display {
                width: 150px;
                height: 150px;
            }
            
            .time {
                font-size: 2rem;
            }
        }
    </style>

</head>
<body>
    <!-- mag inline nalang para madali HAHAHA LMAO!! -->
    <div class="container">
        <h1>Focusly</h1>
        <p style="text-align: center;">Tick the Clock, Clear your Dock</p>
        
        <!--  sa Timer Card -->
        <div class="card timer-card">
            <div class="timer-modes">
                <button class="mode-btn active" data-mode="focus">Focus</button>
                <button class="mode-btn" data-mode="shortBreak">Short Break</button>
                <button class="mode-btn" data-mode="longBreak">Long Break</button>
            </div>
            
            <div class="timer-display">
                <div class="time" id="time">25:00</div>
            </div>
            
            <div class="timer-info">
                <div class="timer-state" id="timer-state">Ready to focus</div>
            </div>
            
            <div class="button-group">
                <button class="btn btn-primary" id="start-btn">Start</button>
                <button class="btn" id="reset-btn">Reset</button>
                <button class="settings-btn" id="settings-btn">
                    <svg class="settings-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- sa Todo list  -->
        <div class="card todo-card">
            <div class="todo-header">
                <h2>To-Do List</h2>
                <div class="completed-count" id="completed-count">0/0</div>
            </div>
            
            <form class="todo-form" id="todo-form">
                <input type="text" class="input-field" id="todo-input" placeholder="Add a new task...">
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
            
            <ul class="todo-list" id="todo-list">
            </ul>
        </div>
    </div>
    <!-- Sa settings -->
    <div class="modal" id="settings-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Timer Settings</h2>
                <button class="modal-close" id="close-settings">&times;</button>
            </div>
            <div class="timer-settings">
                <div class="setting-group">
                    <label class="setting-label" for="focus-time">Focus Time (minutes)</label>
                    <input type="number" class="setting-input" id="focus-time" min="1" max="120" value="25">
                </div>
                <div class="setting-group">
                    <label class="setting-label" for="short-break">Short Break (minutes)</label>
                    <input type="number" class="setting-input" id="short-break" min="1" max="30" value="5">
                </div>
                <div class="setting-group">
                    <label class="setting-label" for="long-break">Long Break (minutes)</label>
                    <input type="number" class="setting-input" id="long-break" min="1" max="60" value="15">
                </div>
                <div class="setting-group">
                    <label class="setting-label" for="pomodoro-count">Pomodoros before Long Break</label>
                    <input type="number" class="setting-input" id="pomodoro-count" min="1" max="10" value="4">
                </div>
                <button class="btn btn-primary" id="save-settings">Save Settings</button>
            </div>
        </div>
    </div>
    <footer>© 2025 Focusly by Bella hihi</footer>

    <script>

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
        let timeSettings = {

            focus: 25 * 60, // 25 mins in seconds
            shortBreak: 5 * 60, // 5 mins in seconds
            longBreak: 15 * 60, // 15 mins in seconds
            pomodoroCount: 4 // no. of pomodoros before maglong break
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
        
        // Start timer
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
            
            timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    isRunning = false;
                    startBtn.textContent = 'Start';
                    
                    // Alert user timer is complete
                    alert('Timer complete!');
                    
                    // Handle timer completion
                    if (currentMode === 'focus') {
                        completedPomodoros++;
                        if (completedPomodoros % timeSettings.pomodoroCount === 0) {
                            // Time for a long break
                            switchMode('longBreak');
                        } else {
                            // Time for a short break
                            switchMode('shortBreak');
                        }
                    } else {
                        // Back to focus mode after break
                        switchMode('focus');
                    }
                    
                    return;
                }
                
                timeLeft--;
                updateTimeDisplay();
            }, 1000);
        }
        
        // Reset timer
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
        });S
        
        initTimer();
        renderTodos();
    </script>
</body>
</html>

       
