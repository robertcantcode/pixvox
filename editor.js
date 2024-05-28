      document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('projectId');
            const storedAccount = JSON.parse(localStorage.getItem('account'));

            if (storedAccount && storedAccount.username && projectId) {
                let projects = JSON.parse(localStorage.getItem('projects')) || [];
                const project = projects.find(p => p.id === projectId && p.owner === storedAccount.username);

                if (project) {
                    const projectCodeTextarea = document.getElementById('project-code');
                    const editor = CodeMirror.fromTextArea(projectCodeTextarea, {
                        lineNumbers: true,
                        mode: 'javascript',
                        theme: 'isotope'
                    });

                    editor.setValue(project.code);

                    document.getElementById('save-project').onclick = () => {
                        project.code = editor.getValue();
                        project.html = `<script>${project.code}</script>`;
                        localStorage.setItem('projects', JSON.stringify(projects));
                        alert('Project saved successfully!');
                    };

                    document.getElementById('insert-sample-code').onclick = () => {
                        const spinningBlockCode = `
const block = document.createElement('div');
block.style.width = '100px';
block.style.height = '100px';
block.style.backgroundColor = 'blue';
block.style.position = 'absolute';
block.style.top = '50%';
block.style.left = '50%';
block.style.transformOrigin = 'center';
document.body.appendChild(block);

let angle = 0;

function rotateBlock() {
    angle += 2;
    block.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
    requestAnimationFrame(rotateBlock);
}

rotateBlock();
`;
                        editor.setValue(spinningBlockCode);
                    };
                } else {
                    alert('Project not found!');
                    window.location.href = 'browse.html';
                }
            } else {
                window.location.href = 'sign.html';
            }
        });