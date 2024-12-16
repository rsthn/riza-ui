
import { Router } from 'riza';
import "./main.css";

import "../css/rui.css";

import "../css/dialog.css";
import "../css/btn-strip.css";
import "../css/btn.css";
import "../css/form.css";

const App = () =>
<r-panel data-root="true" class="p-4 s-fill" onCreated={ () => queueMicrotask(() => Router.refresh()) }>

    <button class="btn" onClick={ () => window.document.documentElement.classList.toggle('light-mode') }>Toggle Light/Dark</button>
    <button class="btn" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.toggleVisibility() }>Toggle Dialog</button>

    <hr/>
    <p><b>Buttons</b></p>
    <div class="mb-1">
        <button class="btn">Default</button>
        <button class="btn outline">Default</button>
        <button class="btn small">Default</button>
        <button class="btn small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn primary">Default</button>
        <button class="btn primary outline">Default</button>
        <button class="btn primary small">Default</button>
        <button class="btn primary small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn secondary">Default</button>
        <button class="btn secondary outline">Default</button>
        <button class="btn secondary small">Default</button>
        <button class="btn secondary small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn success">Default</button>
        <button class="btn success outline">Default</button>
        <button class="btn success small">Default</button>
        <button class="btn success small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn warn">Default</button>
        <button class="btn warn outline">Default</button>
        <button class="btn warn small">Default</button>
        <button class="btn warn small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn danger">Default</button>
        <button class="btn danger outline">Default</button>
        <button class="btn danger small">Default</button>
        <button class="btn danger small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn info">Default</button>
        <button class="btn info outline">Default</button>
        <button class="btn info small">Default</button>
        <button class="btn info small outline">Default</button>
    </div>
    <div class="mb-1">
        <button class="btn dark">Default</button>
        <button class="btn dark outline">Default</button>
        <button class="btn dark small">Default</button>
        <button class="btn dark small outline">Default</button>
    </div>

    <hr/>
    <p><b>Form Elements</b></p>

    <div class="f-row g-2">
        <div class="s-3">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea></textarea>
            </div>

            <div class="form-group">
                <label>Select Country</label>
                <select>
                    <option>USA</option>
                    <option>Honduras</option>
                    <option>Japan</option>
                </select>
            </div>
        </div>

        <div class="s-3">
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div class="form-group">
                <label>Description</label>
                <textarea></textarea>
            </div>

            <div class="form-group">
                <label>Select Country</label>
                <select>
                    <option>USA</option>
                    <option>Honduras</option>
                    <option>Japan</option>
                </select>
            </div>
        </div>
    </div>

    <r-panel class="dialog center" data-ref="dialog">
        <div class="title text-center py-3 fs-1 fw-600">
            <b>Confirmation</b>
        </div>

        <div class="content px-4 pb-3 fs-2d text-center">
            Seg egestas ipsum non pretium efficitur.
            <br/>
            Fusce et luctus velit, ut vehicula nisl.
            <br/>
            Nulla et maximus augue.
            <br/><br/>
        </div>

        <div class="btn-strip">
            <span class="btn outline danger" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>Yes</span>
            <span class="btn outline success" onClick={ (ev) => ev.currentTarget.querySelectorParent('[data-root]').dialog.hide() }>No</span>
        </div>
    </r-panel>

</r-panel>
;

document.body.appendChild(App());
