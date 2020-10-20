import React, {useState} from 'react'

import Sidebar from '../Sidebar';
import Navbar from '../navbar';

import './terminal.css'
 const Term = () => {
         const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
	const [ theme, setTheme ] = React.useState('dark')
	const themeVars = theme === 'dark' ? {
		app: {backgroundColor: '#333444'},
		terminal: {boxShadow: '0 0 8px 2px rgba(255,255,255, 0.5)'},
		window: {backgroundColor: '#d6d1d1', color: '#F4F4F4'},
		field: {backgroundColor: '#27292C', color: '#F4F4F4', fontWeight: '600'},
		cursor: {animation : '1.02s blink-dark step-end infinite'}
	} : {
		app: {backgroundColor: '#ACA9BB'},
		terminal: {boxShadow: '0 2px 5px #33333375'},
		window: {backgroundColor: '#5F5C6D', color: '#E3E3E3'},
		field: {backgroundColor: '#E3E3E3', color: '#474554', fontWeight: 'bold'},
		cursor: {animation : '1.02s blink-light step-end infinite'}
	}
	
	return (
        
       <>
	   
	   <div className="wa">
	 <Sidebar isOpen ={isOpen} toggle ={toggle}/> 
        <Navbar toggle={toggle}/>
		</div>
       <div className="appa">
	  

	  
		
       
		<Terminal theme={themeVars} setTheme={setTheme}/>
        
        
        </div>
</>
    )}
const Terminal = ({ theme, setTheme }) => {
    
	const [ title, setTitle ] = React.useState('guest@npaudyal')
	const handleClose = () => (window.location.href = 'https://nischalpaudyal.com')
	
	
	
	return (
        <>
    
        <div id="terminal" style={theme.terminal}>
		<div id="window" style={theme.window}>
			<button className="btn red" onClick={handleClose}/>
			<button id="useless-btn" className="btn yellow"/>
			<button className="btn green"/>
			<span id="title" style={{color: theme.window.color}}>{title}</span>
		</div>
        
		<Field theme={theme} setTheme={setTheme} setTitle={setTitle}/>
	</div>
    </>
    )}
class Field extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			commandHistory: [],
			commandHistoryIndex: 0,
			fieldHistory: [{text: 'Welcome to the terminal. Type HELP to see the full list of commands.', hasBuffer: true}],
			userInput: '',
			isMobile: false
		}
		this.recognizedCommands = [{
			command: 'help',
			purpose: 'Provides list of info for terminal commands.'
		}, 
			{
			command: 'cls',
			purpose: 'Clears the screen.'
        },
         {
			command: 'exit',
			purpose: 'Quits the Terminal.'
        }, 
        {
			command: 'about',
			isMain: true,
			purpose: 'About Nischal Paudyal.'
        }, 
         {
			command: 'skills',
			isMain: true,
			purpose: 'Displays information about Nischal\'s skills.'
		}, {
			command: 'contact',
			isMain: true,
			purpose: 'Displays contact information for Nischal.'
        },
         {
			command: 'projects',
			isMain: true,
			purpose: 'Displays all of Nischal\'s projects.'
        },
         {
			command: 'launch',
			isMain: true,
			purpose: 'Launches a specified project in a new tab.',
			help: [
				'LAUNCH <TITLE>',
				'Launches a specified project in a new tab.',
				''
				
			]
        },
        ]
		this.handleTyping = this.handleTyping.bind(this)
		this.handleInputEvaluation = this.handleInputEvaluation.bind(this)
		this.handleInputExecution = this.handleInputExecution.bind(this)
		this.handleContextMenuPaste = this.handleContextMenuPaste.bind(this)
	}
	componentDidMount() {
		if (typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IEMobile') !== -1) {
			this.setState(state => ({
				isMobile: true,
				fieldHistory: [...state.fieldHistory, {isCommand: true}, {
					text: `Terminal support is only available on computers!`,
					isError: true,
					hasBuffer: true
				}]
			}))
		}
		
		const userElem = document.querySelector('#field')
		
		// userElem.focus()
		
		document.querySelector('#useless-btn').addEventListener('click', () => this.setState(state => ({
			fieldHistory: [...state.fieldHistory, {isCommand: true}, {text: '', hasBuffer: true}]
		})))
	}
	componentDidUpdate() {
		const userElem = document.querySelector('#field')
		
		userElem.scrollTop = userElem.scrollHeight
	}
	handleTyping(e) {
		e.preventDefault()
		
		const { key, ctrlKey, altKey } = e
		const forbidden = [
			...Array.from({length: 12}, (x, y) => `F${y + 1}`),
			'ContextMenu', 'Meta', 'NumLock', 'Shift', 'Control', 'Alt',
			'CapsLock', 'Tab', 'ScrollLock', 'Pause', 'Insert', 'Home',
			'PageUp', 'Delete', 'End', 'PageDown'
		]

		if (!forbidden.some(s => s === key) && !ctrlKey && !altKey) {
			if (key === 'Backspace') {
				this.setState(state => state.userInput = state.userInput.slice(0, -1))
			} else if (key === 'Escape') {
				this.setState({ userInput: '' })
			} else if (key === 'ArrowUp' || key === 'ArrowLeft') {
				const { commandHistory, commandHistoryIndex } = this.state
				const upperLimit = commandHistoryIndex >= commandHistory.length
				
				if (!upperLimit) {
					this.setState(state => ({
						commandHistoryIndex: state.commandHistoryIndex += 1,
						userInput: state.commandHistory[state.commandHistoryIndex - 1]
					}))
				}
			} else if (key === 'ArrowDown' || key === 'ArrowRight') {
				const { commandHistory, commandHistoryIndex } = this.state
				const lowerLimit = commandHistoryIndex === 0
				
				if (!lowerLimit) {
					this.setState(state => ({
						commandHistoryIndex: state.commandHistoryIndex -= 1,
						userInput: state.commandHistory[state.commandHistoryIndex - 1] || ''
					}))
				}
			} else if (key === 'Enter') {
				const { userInput } = this.state
				
				if (userInput.length) {
					this.setState(state => ({
						commandHistory: userInput === '' ? state.commandHistory : [userInput, ...state.commandHistory],
						commandHistoryIndex: 0,
						fieldHistory: [...state.fieldHistory, {text: userInput, isCommand: true}],
						userInput: ''
					}), () => this.handleInputEvaluation(userInput))
				} else {
					this.setState(state => ({
						fieldHistory: [...state.fieldHistory, {isCommand: true}]
					}))
				}				
			} else {
				this.setState(state => ({
					commandHistoryIndex: 0,
					userInput: state.userInput + key
				}))
			}
		}
	}
	handleInputEvaluation(input) {
        
		try {
			const evaluatedForArithmetic = Math.evaluate(input)

			if (!isNaN(evaluatedForArithmetic)) {
				return this.setState(state => ({fieldHistory: [...state.fieldHistory, {text: evaluatedForArithmetic}]}))
			}

			throw Error
		} catch (err) {
			const { recognizedCommands, giveError, handleInputExecution } = this
			const cleanedInput = input.toLowerCase().trim()
			const dividedInput = cleanedInput.split(' ')
			const parsedCmd = dividedInput[0]
			const parsedParams = dividedInput.slice(1).filter(s => s[0] !== '-')
			const parsedFlags = dividedInput.slice(1).filter(s => s[0] === '-')
			const isError = !recognizedCommands.some(s => s.command === parsedCmd)

			if (isError) {
				return this.setState(state => ({fieldHistory: [...state.fieldHistory, giveError('nr', input)]}))
			}

			return handleInputExecution(parsedCmd, parsedParams, parsedFlags)
		}
	}
	handleInputExecution(cmd, params = [], flags = []) {
		if (cmd === 'help') {
			if (params.length) {
				if (params.length > 1) {
					return this.setState(state => ({
						fieldHistory: [...state.fieldHistory, this.giveError('bp', {cmd: 'HELP', noAccepted: 1})]
					}))
				}
				
				const cmdsWithHelp = this.recognizedCommands.filter(s => s.help)
				
				if (cmdsWithHelp.filter(s => s.command === params[0]).length) {
					return this.setState(state => ({
						fieldHistory: [...state.fieldHistory, {
							text: cmdsWithHelp.filter(s => s.command === params[0])[0].help,
							hasBuffer: true
						}]
					}))
				} else if (this.recognizedCommands.filter(s => s.command === params[0]).length) {
					return this.setState(state => ({
						fieldHistory: [...state.fieldHistory, {
							text: [
								`No additional help needed for ${this.recognizedCommands.filter(s => s.command === params[0])[0].command.toUpperCase()}`,
								this.recognizedCommands.filter(s => s.command === params[0])[0].purpose
							],
							hasBuffer: true
						}]
					}))
				}
				
				return this.setState(state => ({
					fieldHistory: [...state.fieldHistory, this.giveError('up', params[0].toUpperCase())]
				}))
			}
			
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {
					text: [
                        'All commands:',
						...this.recognizedCommands
							.sort((a, b) => a.command.localeCompare(b.command))
							.map(({ command, purpose }) => `${command}${Array.from({length: 15 - command.length}, x => '').join('....')}${purpose}`),
							'',
						
					],
					hasBuffer: true
				}]
			}))
		} else if (cmd === 'cls') {
			return this.setState({fieldHistory: []})
		} else if (cmd === 'date') {
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {text: `The current date is: ${new Date(Date.now()).toLocaleDateString()}`, hasBuffer: true}]
			}))
		} else if (cmd === 'exit') {
			return window.location.href = 'https://nischalpaudyal.com'
		} else if (cmd === 'about') {
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {text: [
					'Hey there!',
					`My name is Nischal. I am a senior majoring in Computer science and mathematics in the University of Mississippi. I am currently living in Johnston, IA. I am a well-organized person, problem solver, with high
                    attention to detail. I play piano, I am a fan of any sports.`,
					`Interested in any web development spectrum and looking forward to work with ambitious people on ambitious projects.`
				], hasBuffer: true}]
			}))
		}else if (cmd === 'skills') {
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {text: [
					'Languages:	 HTML,CSS, JavaScript, Dart, Python, Java',
					
					'',
					'Libraries/Frameworks: NodeJS, ExpressJS, ReactJS, Flutter, Spring, MongoDB, SQL',
					
					'',
					'Other: Git, Firebase, GraphQL, Blender '
					
                    
                    
				], hasBuffer: true}]
			}))
		} else if (cmd === 'contact') {
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {text: [
					'Email: npaudyal01@gmail.com',
					'Website: nischalpaudyal.com',
					'LinkedIn: @npaudyal',
					'GitHub: @npaudyal'
					
				], hasBuffer: true}]
			}))
		} else if (cmd === 'projects') {
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, {text: [
					'To view any of these projects live or their source files, type PROJECT <TITLE>, e.g. PROJECT Minesweeper.',
					'',
					'Jodi',
					'Built with Flutter, Firebase',
					`A dating app with lots of more features than tinder. Eg: Unlimited swipes, location sharing, location tracking, etc. Available on play store.`,
					'',
					'idetector',
					'Built with Python',
					'Award winning hackathon project. A gesture recognizing software that can be used to play games and do simple computing.',
					'',
					'Scrumptious',
					'Built with MERN stack',
					`Junior year project. It is a recipe building app with numerous other features`,
					'',
					'Ecommerce',
					'Built with Node, Express, and MongoDB',
					`A udemy project which is a simple e-commerce application with payment features using stripeJS.`,
					'',
					'CustomerTracker',
					'Built with Java, Spring, Spring AOP, SQL.',
					'A simple customer management app.'
					
				], hasBuffer: true}]
			}))
		} else if (cmd === 'launch') {
			if (params.length === 1) {
			
			const projects = [{
					title: 'jodi',
					live: 'https://play.google.com/store/apps/details?id=com.paudyal.merosathi'
				}, {
					title: 'idetector',
					live: 'https://devpost.com/software/pranaya-shrestha'
				}, {
					title: 'scrumptious',
					live: 'https://scrumptious-recipe-manager.herokuapp.com/'
				}, {
					title: 'ecommerce',
					live: 'https://github.com/npaudyal/E-commerce'
				}, {
					title: 'customertracker',
					live: 'https://github.com/npaudyal/Web-Customer-Tracker'
				}]
				
				
				return this.setState(state => ({
					fieldHistory: [...state.fieldHistory, {text: `Launching ${params[0]}...`, hasBuffer: true}]
				}), () => {
					try {
						window.open(projects.filter(s => s.title === params[0])[0].live)
					} catch (e) {
						return this.setState(state => ({
							fieldHistory: [...state.fieldHistory,  {text: `No such project! Please do a spell check!`, hasBuffer: true}]
						}))
					}
					
				}
				)}
			
			
			return this.setState(state => ({
				fieldHistory: [...state.fieldHistory, this.giveError('bp', {cmd: 'PROJECT', noAccepted: 1})]
			}))
		} 
	}
	handleContextMenuPaste(e) {
		e.preventDefault()
		
		if ('clipboard' in navigator) {
			navigator.clipboard.readText().then(clipboard => this.setState(state => ({
				userInput: `${state.userInput}${clipboard}`
			})))
		}
	}
	giveError(type, extra) {
		const err = { text: '', isError: true, hasBuffer: true}
		
		if (type === 'nr') {
			err.text = `${extra} : The term or expression '${extra}' is not recognized. Type HELP to get you started.`
		} else if (type === 'nf') {
			err.text = `The ${extra} command requires the use of flags. If you don't know what flags can be used, type HELP ${extra}.`
		} else if (type === 'bf') {
			err.text = `The flags you provided for ${extra} are not valid. If you don't know what flags can be used, type HELP ${extra}.`
		} else if (type === 'bp') {
			err.text = `The ${extra.cmd} command requires ${extra.noAccepted} parameter(s). If you don't know what parameters to use, type HELP ${extra.cmd}.`
		} else if (type === 'up') {
			err.text = `The command ${extra} is not supported by the HELP utility.`
		}
		
		return err
	}
	render() {
		const { theme } = this.props
		const { fieldHistory, userInput } = this.state
		
		return (
        <div
					 id="field"
					 className={theme.app.backgroundColor === '#333444' ? 'dark' : 'light'}
					 style={theme.field}
					 onKeyDown={e => this.handleTyping(e)}
					 tabIndex={0}
					 onContextMenu={e => this.handleContextMenuPaste(e)}
					 >
			{fieldHistory.map(({ text, isCommand, isError, hasBuffer }) => {
				if (Array.isArray(text)) {
					return <MultiText input={text} isError={isError} hasBuffer={hasBuffer}/>
				}
				
				return <Text input={text} isCommand={isCommand} isError={isError} hasBuffer={hasBuffer}/>
			})}
			<UserText input={userInput} theme={theme.cursor}/>
		</div>
        )}
}
const Text = ({ input, isCommand, isError, hasBuffer }) => <>
	<div>
		{isCommand && <div id="query"> guest@npaudyal : ~ $ </div>}
		<span className={!isCommand && isError ? 'error' : ''}>{input}</span>
	</div>
	{hasBuffer && <div></div>}
</>
const MultiText = ({ input, isError, hasBuffer }) => <>
	{input.map(s => <Text input={s} isError={isError}/>)}
	{hasBuffer && <div></div>}
</>
const UserText = ({ input, theme }) => <div>
	<div id="query">guest@npaudyal : ~ $</div>
	<span>{input}</span>
	<div id="cursor" style={theme}></div>
</div>


export default Term;